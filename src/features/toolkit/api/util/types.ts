export type PokemonListReturnType = {
    count: number;
    next: string;
    previous: string;
    results: {
      name: string;
      url: string;
    }[];
  }
  
  export type PokemonDetailReturnType = {
    abilities: string;
    height: string;
  }