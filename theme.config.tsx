import { useRouter } from 'next/router'
import React from 'react'
import { useConfig } from 'nextra-theme-docs'

const config = {
  logo: <span>Project:;COLD 攻略サイト（非公式）</span>,
  footer: {
    text: 'このページはファン有志によるWebサイトです。Project:;COLDおよび第四境界とは関係ございません。管理者: ryo-a',
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  head: () => {
    const { title } = useConfig();
    return (
      <>
        <meta
          property="og:image"
          content={`https://team-melt.ne/api/ogp?title=${title}`}
        />
      </>
    );
  },
  useNextSeoProps: () => {
    const { frontMatter } = useConfig();
    return ({
      defaultTitle: `Project:;COLD 攻略サイト（非公式）`,
      titleTemplate: `${frontMatter.title} - Project:;COLD 攻略サイト（非公式）`,
      description: "Project:;COLD ファン有志による攻略サイトです。",
    })
  },
}


export default config
