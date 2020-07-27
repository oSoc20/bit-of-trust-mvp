<script lang="ts">
  import {onMount} from 'svelte';
  import {DataSet, Network} from "vis-network/standalone";
  import Relationship from "../git/relationship";
  import {tokenToString} from "../git/token";

  let networkContainer;

  let promise = (async () => {
    let relationships = await Relationship.getAll();

    const data = {nodes: new DataSet(), edges: new DataSet()};
    const options = {};

    for (let relationship: Relationship of relationships) {
      let hash = await relationship.getHash();
      data.nodes.add({id: hash, label: relationship.name});

      for (let token of await relationship.getTokens()) {
        let tokenString = tokenToString(token);
        if (!data.nodes.getIds().some(id => id === tokenString)) {
          data.nodes.add({id: tokenString, label: tokenString});
        }
        data.edges.add({from: tokenString, to: hash});
      }
    }

    networkContainer.style = "";
    const network = new Network(networkContainer, data, options);
  })();
</script>

<div id="full-network" bind:this={networkContainer} style="display:none"></div>

{#await promise}
  <p>Getting network</p>
{:catch error}
  <p>Error getting network: {console.error("%O", error), error}</p>
{/await}
