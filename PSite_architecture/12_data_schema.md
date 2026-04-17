# 结构化数据设计

## 一、profile.ts

```ts
export interface Profile {
  name: string;
  chineseName?: string;
  title: string;
  university: string;
  location?: string;
  email: string;
  github: string;
  bio: string;
  interests: string[];
}
```

## 二、projects.ts

```ts
export interface Project {
  slug: string;
  title: string;
  period: string;
  summary: string;
  background: string;
  coreWork: string[];
  methods: string[];
  outcomes: string[];
  tags: string[];
  coverImage?: string;
  links?: {
    github?: string;
    paper?: string;
    demo?: string;
    pdf?: string;
  };
}
```

## 三、awards.ts

```ts
export interface Award {
  title: string;
  period: string;
  category?: string;
  description?: string;
}
```

## 四、skills.ts

```ts
export interface SkillGroup {
  category: string;
  items: string[];
}
```

## 五、education.ts

```ts
export interface EducationItem {
  institution: string;
  program: string;
  period: string;
  gpa?: string;
  score?: string;
  description?: string;
}
```

## 六、contact.ts

```ts
export interface ContactInfo {
  email: string;
  github: string;
  phone?: string;
}
```

## 七、优势

这样设计后：
- 内容维护更方便
- Claude 更容易理解
- 后续迁移到 CMS 或数据库也更容易
