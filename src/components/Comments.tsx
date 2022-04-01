/* eslint-disable react/require-default-props */
import {
  Box,
  Flex,
  useDisclosure,
  Text,
  Image,
  Textarea,
  Button,
} from '@chakra-ui/react'
import { DateTime } from 'luxon'
import { ImgHTMLAttributes, ReactElement, useState } from 'react'
import {
  useCreateCommentMutation,
  useGetTaskCommentsQuery,
} from 'src/generated/graphql'

const Comments = ({ taskId }: ICard): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  //   const { comments } = props
  //   console.log(comments)

  const [newComment, setNewComment] = useState<string>()

  const { data, loading } = useGetTaskCommentsQuery({
    variables: { where: { id: taskId } },
    onCompleted: (ok) => {
      console.log(ok)
    },
    onError: (err) => {
      console.log('err => ', err)
    },
  })

  const [addComment] = useCreateCommentMutation({
    onError: (err) => {
      console.log('err => ', err)
    },
    onCompleted: (test) => {
      console.log('test => ', test)
    },
    // TODO : refetch ici l'import des messages de la task
    //   refetchQueries: ['GetSingleSelfTasks'],
  })

  const saveNewComment = () => {
    addComment({
      variables: {
        data: {
          content: newComment || '',
          created_at: DateTime.now(),
          is_disabled: false,
        },
      },
    })
    setNewComment('')
  }

  return (
    <Box>
      <Flex flexDirection="column" mt="24px">
        <Flex>
          <Text textStyle="titleTicket">Comments</Text>
        </Flex>
        <Flex justifyContent="space-between">
          {/* List of comments */}
          <Flex flexDirection="column" width="45%">
            {data?.task.comments.map((comment) => (
              <Flex key={comment.id} flexDirection="column" mt="12px">
                <Flex>
                  <Image
                    borderRadius="full"
                    boxSize="24px"
                    m="12px 4px"
                    src={comment.user_task_comments.avatar}
                  />
                  <Flex flexDirection="column" ml="12px">
                    <Text textStyle="body">
                      {comment.user_task_comments.first_name}{' '}
                      {comment.user_task_comments.last_name} - Developper
                    </Text>
                    <Text textStyle="body">
                      {DateTime.fromISO(comment.created_at).toLocaleString(
                        DateTime.DATETIME_SHORT
                      )}
                    </Text>
                  </Flex>
                </Flex>
                <Text textStyle="body" mt="12px">
                  {comment.content}
                </Text>
              </Flex>
            ))}
          </Flex>

          {/* Add new comment */}
          <Flex alignItems="center" width="45%" flexDirection="column">
            <Textarea
              textStyle="body"
              mt="12px"
              placeholder="Add a new comment"
              value={newComment}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setNewComment(e.target.value)
              }
            />
            <Button
              colorScheme="green"
              size="xs"
              alignSelf="flex-end"
              mt="12px"
              onClick={() => saveNewComment()}
            >
              Save
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Comments
