# Task: Criar uma API de Galeria de Mídia

## Descrição

Esta API tem como objetivo gerenciar uma galeria de mídia, permitindo o upload, organização e categorização de diferentes tipos de arquivos, como imagens, vídeos e GIFs. A API será desenvolvida utilizando TypeScript e MongoDB, garantindo flexibilidade e escalabilidade para armazenar grandes volumes de mídia.

### **Principais Funcionalidades:**

- Suporte a diferentes tipos de mídia: imagens, vídeos e GIFs.
- Organização por categorias, permitindo definir uma ordem de exibição.
- Restrição de tamanho máximo de arquivos com configurações globais e personalizadas por categoria.
- Validação automática dos arquivos no momento do upload.
- Rotas para criar categorias, fazer upload de mídias e listar os arquivos armazenados.

## Requisitos

1. **Suporte a diferentes tipos de mídia**:

   - Imagens
   - Vídeos
   - GIFs

2. **Categorias**:

   - Cada mídia deve estar vinculada a uma categoria.
   - Categorias podem ter um nome e uma ordem para organização.
   - Exemplo de categorias: `Instagram`, `Facebook`, `TikTok`, etc.

3. **Tamanho máximo de arquivos**:

   - Definir valores padrões em uma variável de configuração:
     - Imagem: 20KB
     - Vídeo: 2MB
     - GIF: 5MB
   - Permitir personalização do tamanho máximo por categoria.
     - Exemplo: Para `Instagram`, imagens podem ter um limite de 5KB.

---

## Modelos de Dados

### 1. **Configuração Padrão** (Variável de Configuração)

```ts
const mediaConfig = {
  defaultLimits: {
    image: 20000, // 20KB
    video: 2000000, // 2MB
    gif: 5000000, // 5MB
  }
};
```

### 2. **Schema de Categoria**

```ts
import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  order: { type: Number, required: true },
  limits: {
    image: { type: Number, default: null },
    video: { type: Number, default: null },
    gif: { type: Number, default: null }
  }
});

const Category = model('Category', CategorySchema);
```

**Exemplo de Documento de Categoria:**

```json
{
  "name": "Instagram",
  "order": 1,
  "limits": {
    "image": 5000,  
    "video": null,  
    "gif": null  
  }
}
```

### 3. **Schema de Mídia**

```ts
const MediaSchema = new Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String, enum: ['image', 'video', 'gif'], required: true },
  size: { type: Number, required: true },
  extension: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }
});

const Media = model('Media', MediaSchema);
```

**Exemplo de Documento de Mídia:**

```json
{
  "filename": "foto1.jpg",
  "url": "https://exemplo.com/midia/foto1.jpg",
  "type": "image",
  "size": 4800,
  "extension": "jpg",
  "category": "Instagram"
}
```

---

## Regras de Validação ao Fazer Upload

1. **Determinar limite de tamanho**:
   - Verificar se a categoria tem um limite específico para o tipo de mídia.
   - Caso não tenha, usar o valor padrão.
   - Retornar erro se o arquivo ultrapassar o limite.

```ts
async function validateMediaUpload(fileSize: number, fileType: 'image' | 'video' | 'gif', categoryId: string) {
  const category = await Category.findById(categoryId);
  if (!category) throw new Error('Categoria não encontrada');

  const maxSize = category.limits[fileType] || mediaConfig.defaultLimits[fileType];
  if (fileSize > maxSize) {
    throw new Error(`Tamanho do arquivo excede o limite permitido (${maxSize} bytes)`);
  }
}
```

---

## Rotas da API

### **1. Criar Categoria**

**POST** `/categories`

**Exemplo de Requisição:**

```json
{
  "name": "Instagram",
  "order": 1,
  "limits": {
    "image": 5000
  }
}
```

### **2. Fazer Upload de Mídia**

**POST** `/media/upload`

- **Body (FormData):**
  - `file`: Arquivo de upload
  - `categoryId`: ID da categoria

---

Com essa estrutura, a API de galeria de mídia garante armazenamento eficiente, categorizado e validado para diversos tipos de arquivos.

