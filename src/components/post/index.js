import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//estilo css
import styled, {css} from 'styled-components'

async function getPosts(id) {
  const response = await fetch(`http://localhost:3000/json/post-${id}.json`)
  return await response.json()
}

const PostDetails = () => {
  const [post, setPost] = useState({})

  const { id } = useParams()

  useEffect(() => {
    async function fetchData() {
      const post = await getPosts(id)
      setPost(post.data)
    }

    fetchData()
  }, [])

  return (
    <Section red>
      <Link to='/'> Voltar para os post</Link>
      <div>
        <Img src={post.image} alt="{post.title}" />
        <h2>{post.title}</h2>
        <p> {post.text} </p>
      </div>
    </Section>
  )
}

const Section = styled.section `

/* se tiver blue vai pra red */

  background-color: blue;
  ${props => props.red && css `
      background-color: red;
  `}
  padding: 50px;
`
const Img = styled.img`
  width: 100%
`
export { PostDetails }