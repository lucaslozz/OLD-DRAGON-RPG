export interface Monster {
  numero: number;
  nome: string;
  nome_curto: string;
  imagem: string;
  flavor: string;
  pv: number;
  fraquezas: string[];
  habilidades: string[];
  onde_encontrar: string[];
  combate: string;
}
