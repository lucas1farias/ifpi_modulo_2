"use strict";
/* 1. Qual a diferença entre tipagem dinâmica e tipagem estática? */
Object.defineProperty(exports, "__esModule", { value: true });
// Este exemplo mostra a tipagem estática em ação (Type 'boolean' is not assignable to type 'string'.)
let pessoa = "Mario";
// pessoa = true
// Porém, se na instanciação fosse dado mais de uma opção de tipo, TypeScript aceita a abordagem
let individuo = "Alceu";
individuo = true;
