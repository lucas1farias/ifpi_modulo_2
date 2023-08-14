

## Execução dos módulos TypeScript
### Instalar a biblioteca ts node
###### OBS: Instalar na raiz do projeto via terminal
`npm i ts-node`

### Para execução correta dos arquivos ".ts", as pastas onde eles estão precisam ser acessadas
###### Exemplo
```
cd poo/07_08_2023
npx ts-node questao1.ts
```

## Caso não queria executar o módulo ".ts" diretamente, ignorar as etapas anteriores
### Conversão de ".ts" em ".js"
`npx tsc nome_arquivo.ts`