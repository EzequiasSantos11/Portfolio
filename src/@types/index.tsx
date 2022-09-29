export type PropsPost ={
  post?:{
    metadata: {
      tumbnail?: string,
    slug: string,
    content: string,
    title: string,
    excerpt: string,
    date: string
    },
    content: string
  },
}

export type PropsHome ={
  posts?:[{
    metadata: {
      tumbnail?: string,
      slug: string,
      content: string,
      title: string,
      excerpt: string,
      date: string
    },
    content: string
    },
  ],
  gitUser?:{
    name?: string,
    avatar_url?: string
  }
 
}