export type Pokemon = {
  nom: string,
  description: string,
  types: string[],
  zone: Zone,
  liste_attaques: liste_attaques[]
}

export type liste_attaques = {
  nom_attaque: string,
  description_attaque: string,
  degat_attaque: number,
}

export type Zone = {
  nom_zone: string,
  region_zone: string,
}
