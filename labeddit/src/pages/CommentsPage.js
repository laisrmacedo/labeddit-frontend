import { Footer } from "../components/Footer"
import { Headers } from "../components/Header"
import { PostComment } from "../components/PostComment"
import { Container, HorizontalLine, InputForLongText, Radius8Btn } from "../components/styledcomponents";

export const CommentsPage = () => {
  return (
    <>
      <Headers
        isCommentsPage={true} />
      <Container>
        <PostComment />
        <InputForLongText placeholder="Adicionar comentário" />
        <Radius8Btn>Responder</Radius8Btn>
        <HorizontalLine />
        <div>
          <PostComment />
        </div>
      </Container>

      <Footer />
    </>
  )
}