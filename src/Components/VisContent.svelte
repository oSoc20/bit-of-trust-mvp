<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">

<!-- Preload assets to make sure they render properly -->
<i class="far fa-user" style="visibility:hidden;"></i>
<i class="fal fa-user" style="visibility:hidden;"></i>
<i class="fas fa-users" style="visibility:hidden;"></i>

<script lang="ts">
  import {DataSet, Network} from "vis-network/standalone";
  import Relationship from "../git/relationship";
  import {tokenToString} from "../git/token";

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
      }
    };

    for (let relationship: Relationship of relationships) {
      let hash = await relationship.getHash();
      data.nodes.add({id: hash, label: relationship.name, group: "relationships"});

      for (let token of await relationship.getTokens()) {
        let tokenString = tokenToString(token);
        if (!data.nodes.getIds().some(id => id === tokenString)) {
          data.nodes.add({id: tokenString, label: "", value: 1, group: "unknownUsers"});
        }
        data.edges.add({from: tokenString, to: hash});
      }
    }

    networkContainer.style = "";
    const network = new Network(networkContainer, data, options);
  })();
</script>

<style>
  #full-network {
    width: 100%;
    height: 90%;
  }
</style>

<div id="full-network" bind:this={networkContainer} style="display:none"></div>

{#await promise}
  <p>Getting network...</p>
{:catch error}
  <p>Error getting network: {console.error("%O", error), error}</p>
{/await}
