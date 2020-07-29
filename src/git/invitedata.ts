import Relationship from "./relationship";
import type {RelationshipName} from "./relationship";
import type {Token} from "./token";
import {LocalData} from "./localdata";
import {createToken, stringToToken, tokenToString} from "./token";

export type InviteSecret = string;

export class InviteData {
  private static createInviteSecret(): InviteSecret {
    //TODO: add params for invitee name and stuff
    //
    //The purpose of invite secrets is so we can know who accepted the
    //invite, and add a local alias for their new token.
    //
    //This means we should store the secret and the alias that should
    //get associated with their token.

    let secret = new Uint8Array(4);
    crypto.getRandomValues(secret);
    return [...secret]
      .map((b: Number) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  static createInvite(relationship: Relationship, inviter: Token, baseUrl: string): string {
    let inviteSecret = this.createInviteSecret();

    //TODO: maybe send relationship alias too?
    let invite = {
      r: relationship.name,
      i: tokenToString(inviter),
      a: LocalData.getTokenAlias(inviter),
      s: inviteSecret
    }

    let inviteJson = JSON.stringify(invite);

    return baseUrl + btoa(inviteJson);
  }

  static async acceptInvite(inviteString: string, baseUrl: string, ourToken: Token = createToken()): Promise<Token> {
    let inviteBase64 = inviteString.slice(baseUrl.length); //HACK

    let invite = JSON.parse(atob(inviteBase64));

    let inviterToken: Token = stringToToken(invite.i);
    let inviterAlias: string = invite.a;
    LocalData.setTokenAlias(inviterToken, inviterAlias);

    let inviteSecret: InviteSecret = invite.s;

    let relationshipName: RelationshipName = invite.r;
    let relationship = await Relationship.get(relationshipName);

    //TODO: add the option to reuse an existing token
    //TODO: store the fact that this is our token
    //TODO: check for failures
    await relationship.addToken(ourToken);
    await relationship.commitChanges(inviteSecret);
    await relationship.push();

    return ourToken;
  }
}
