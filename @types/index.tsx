export type PropsPost ={
  post?:{
    metadata: {
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