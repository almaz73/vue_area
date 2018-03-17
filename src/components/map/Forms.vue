<template>
  <v-container fluid>
    <v-layout row wrap>

        <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-toolbar color="indigo" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Inbox</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
            </v-toolbar>
            <v-list>
            <v-list-tile avatar v-for="item in items" :key="item.title" @click="()=>alert()">
                <v-list-tile-action>
                <v-icon v-if="item.icon" color="pink">star</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-avatar>
                <img :src="item.avatar">
                </v-list-tile-avatar>
            </v-list-tile>
            </v-list>
        </v-card>
        </v-flex>

      <v-flex xs12 sm6>
        <v-select
          label="Select"
          :items="people"
          v-model="e11"
          item-text="name"
          item-value="name"
          multiple
          chips
          max-height="auto"
          autocomplete
        >
          <template slot="selection" slot-scope="data">
            <v-chip
              close
              @input="data.parent.selectItem(data.item)"
              :selected="data.selected"
              class="chip--select-multi"
              :key="JSON.stringify(data.item)"
            >
              <v-avatar>
                <img :src="data.item.avatar">
              </v-avatar>
              {{ data.item.name }}
            </v-chip>
          </template>
          <template slot="item" slot-scope="data">
            <template v-if="typeof data.item !== 'object'">
              <v-list-tile-content v-text="data.item"></v-list-tile-content>
            </template>
            <template v-else>
              <v-list-tile-avatar>
                <img :src="data.item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>
              </v-list-tile-content>
            </template>
          </template>
        </v-select>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-select
          :items="states"
          :filter="customFilter"
          v-model="a1"
          item-text="name"
          label="Select"
          autocomplete
        ></v-select>
      </v-flex>
    </v-layout>
        
  </v-container>
</template>
<script>
export default {
  data() {
    let srcs = {
      1: '/static/doc-images/lists/1.jpg',
      2: '/static/doc-images/lists/2.jpg',
      3: '/static/doc-images/lists/3.jpg',
      4: '/static/doc-images/lists/4.jpg',
      5: '/static/doc-images/lists/5.jpg'
    }
    return {
      a1: null,
      states: [
        { name: 'Florida', abbr: 'FL', id: 1 },
        { name: 'Georgia', abbr: 'GA', id: 2 },
        { name: 'Nebraska', abbr: 'NE', id: 3 },
        { name: 'California', abbr: 'CA', id: 4 },
        { name: 'New York', abbr: 'NY', id: 5 }
      ],
      customFilter(item, queryText, itemText) {
        const hasValue = val => (val != null ? val : '')
        const text = hasValue(item.name)
        const query = hasValue(queryText)
        return (
          text
            .toString()
            .toLowerCase()
            .indexOf(query.toString().toLowerCase()) > -1
        )
      },

      e11: [],
      people: [
        { header: 'Group 1' },
        { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
        { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
        { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
        { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
        { divider: true },
        { header: 'Group 2' },
        { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
        { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
        { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
        { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] }
      ],
      items: [
        {
          icon: true,
          title: 'Jason Oner',
          avatar: '/static/doc-images/lists/1.jpg'
        },
        { title: 'Travis Howard', avatar: '/static/doc-images/lists/2.jpg' },
        { title: 'Ali Connors', avatar: '/static/doc-images/lists/3.jpg' },
        { title: 'Cindy Baker', avatar: '/static/doc-images/lists/4.jpg' }
      ]
    }
  }
}
</script>
