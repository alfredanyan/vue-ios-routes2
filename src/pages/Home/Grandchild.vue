<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-back-btn to="/home/child" label="Child" />
      </template>
      <template #title> Grandchild </template>
    </page-header>
    <page-body>
      <template #content>
        <div class="text-h5 q-mb-xs">Creating IOS app</div>
        <div class="q-pa-lg">
          <q-option-group
            v-model="group"
            :options="options"
            color="primary"
            inline
            class="q-mb-md"
          />

        </div>
        <p>Our Grandchild page content.</p>
      </template>
    </page-body>
  </page>
</template>

<script>
import { ref } from 'vue'
export default {

  name: "Grandchild",

   setup () {
    return {
      group: ref('op1'),

      options: [
        {
          label: 'Shallow',
          value: 'op1'
        },
        {
          label: 'Deep',
          value: 'op2'
        },
        {
          label: 'Very deep',
          value: 'op3'
        }
      ]
    }
  }
};
</script>
