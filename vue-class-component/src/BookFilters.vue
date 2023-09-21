<template>
  <div>
    <div v-for="genre in genreValues" :key="genre" class="radio-option">
      <label>
        <input
          type="radio"
          :value="genre"
          v-model="selectedGenres"
          @click="toggleGenre(genre)"
        />
        {{ genre }}
      </label>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import { Genre } from './IBook.interface';

@Component
export default class BookFilters extends Vue {
  @Emit('toggleGenre')
  private emitToggleGenre(genre: Genre) {
    return genre;
  }

  private selectedGenres: Record<Genre, boolean> = {
    Modernism: false,
    Realism: false,
  };

  private genreValues: Genre[] = Object.values(Genre);

  private toggleGenre(genre: Genre) {
    this.emitToggleGenre(genre);
  }
}
</script>

<style scoped>
.activeFilter {
  color: blue;
  cursor: pointer;
}
.radio-option {
  display: inline-block; 
  margin-right: 20px;
}
</style>