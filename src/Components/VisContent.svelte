<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">

<!-- Preload assets to make sure they render properly -->
<i class="far fa-user" style="visibility:hidden;"></i>
<i class="fal fa-user" style="visibility:hidden;"></i>
<i class="fas fa-users" style="visibility:hidden;"></i>

<script lang="ts">
  import {DataSet, Network} from "vis-network/standalone";
  import Relationship from "../git/relationship";
  import {stringToToken, tokenToString} from "../git/token";
  import {LocalData} from "../git/localdata";
  import {InviteData} from "../git/invitedata";

  let networkContainer;

  let promise = (async () => {
    let relationships = await Relationship.getAll();

    const data = {nodes: new DataSet(), edges: new DataSet()};
    const options = {
      nodes: {
        borderWidth: 2,
        color: "#2c5282",
        font: {
          color: "#2c5282",
          face: "Roboto",
          size: 16
        }
      },
      edges: {
        width: 2,
        color: "#2c5282",
      },
      layout: {
        hierarchical: {
          enabled: false
        },
      },
      physics: {
        enabled: true,
        solver: 'barnesHut',
        barnesHut: {
          avoidOverlap: 0.5
        }
      },
      groups: {
        knownUsers: {
          shape: 'icon',
          icon: {
            face: '"Font Awesome 5 Free"',
            color: "#2c5282",
            code: '\uf007',
            weight: 700,
            size: 24,
          }
        },
        unknownUsers: {
          shape: 'icon',
          icon: {
            face: '"Font Awesome 5 Free"',
            color: "#2c5282",
            code: '\uf007',
            weight: 300,
            size: 24
          },
          font: {
            size: 0,
          },
        },
        relationships: {
          shape: 'icon',
          icon: {
            face: '"Font Awesome 5 Free"',
            color: "#2c5282",
            code: '\uf0c0',
            weight: 900,
            size: 48
          },
        }
      },
      interaction: {
        hover: true,
        selectable: false,
        dragView: false
      }
    };

    for (let relationship: Relationship of relationships) {
      let hash = await relationship.getHash();
      let relationshipAlias = LocalData.getRelationshipAlias(relationship);
      data.nodes.add({id: hash, label: relationshipAlias, group: "relationships"});

      for (let token of await relationship.getTokens()) {
        let tokenString = tokenToString(token);
        let tokenAlias = LocalData.getTokenAlias(token);
        let known = LocalData.isTokenKnown(token);
        let visGroup = known ? "knownUsers" : "unknownUsers";
        if (!data.nodes.getIds().some(id => id === tokenString)) {
          data.nodes.add({id: tokenString, label: tokenAlias, value: 1, group: visGroup});
        }
        data.edges.add({from: tokenString, to: hash});
      }
    }

    networkContainer.style = "";
    const network = new Network(networkContainer, data, options);
    network.on("hoverNode", (params) => {
      let tokenString = params.node;
      let node = network.body.nodes[tokenString];
      if (node.options.group === "unknownUsers") {
        network.body.nodes[tokenString].setOptions({font: {size: 16}});
        network.redraw();
      }
    });
    network.on("blurNode", (params) => {
      let tokenString = params.node;
      let node = network.body.nodes[tokenString];
      if (node.options.group === "unknownUsers") {
        network.body.nodes[tokenString].setOptions({font: {size: 0}});
        network.redraw();
      }
    });
  })();
</script>

<style>
  #full-network {
    width: 100%;
    height: 90vh;
  }
</style>

<div id="full-network" bind:this={networkContainer} style="display:none"></div>

{#await promise}
  <p>Getting network...</p>
{:catch error}
  <p>Error getting network: {console.error("%O", error), error}</p>
{/await}
