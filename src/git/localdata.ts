import type {Token} from "./token";
import {tokenToString} from "./token";
import type {Relationship} from "./relationship";
import type {RelationshipName} from "./relationship";

export class LocalData {
  private static getKeyForToken(token: Token): string {
   return "token:" + tokenToString(token);
  }

  private static getKeyForRelationship(relationshipName: RelationshipName): string {
    return "relationship:" + relationshipName;
  }

  private static getRelationshipFallbackAlias(relationshipName: RelationshipName): string {
    //transform 'my-cool-relationship' to 'My Cool Relationship' as a fallback

    let name = relationshipName;
    return name
      .split("-")
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }

  static getTokenAlias(token: Token): string {
    let key = this.getKeyForToken(token);
    return localStorage.getItem(key) ?? "Unknown User";
  }

  static getRelationshipAlias(relationshipName: RelationshipName): string {
    let key = this.getKeyForRelationship(relationshipName);
    return localStorage.getItem(key) ?? this.getRelationshipFallbackAlias(relationshipName);
  }

  static setTokenAlias(token: Token, alias: string): void {
    let key = this.getKeyForToken(token);
    localStorage.setItem(key, alias);
  }

  static setRelationshipAlias(relationship: Relationship, alias: string): void {
    let key = this.getKeyForRelationship(relationship.name);
    localStorage.setItem(key, alias);
  }

  static isTokenKnown(token: Token): boolean {
    let key = this.getKeyForToken(token);
    return localStorage.getItem(key) !== null;
  }

  static isRelationshipKnown(relationship: Relationship): boolean {
    let key = this.getKeyForRelationship(relationship.name);
    return localStorage.getItem(key) !== null;
  }
}
