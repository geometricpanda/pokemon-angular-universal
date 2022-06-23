export interface PokemonSummary {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  previous: null | string;
  next: null | string;
  results: Array<PokemonSummary>;
}

export interface PokemonForms {
  name: string;
  url: string;
}

export interface PokemonSprites {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface Pokemon {
  forms: Array<PokemonForms>;
  sprites: PokemonSprites;
}
