import { GetStaticPaths, GetStaticProps } from 'next'

const CourseInfo = () => {
  return (
    <div>
      <div></div>
    </div>
  )
}

export default CourseInfo

export const getStaticProps: GetStaticProps = ({ params }) => {
  console.log(params)
  return { props: { params } }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      },
      {
        params: {
          id: '2',
        },
      },
      {
        params: {
          id: '3',
        },
      },
    ],
    fallback: true,
  }
}
