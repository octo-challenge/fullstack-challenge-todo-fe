
import { z }       from 'zod'

import { 상수_할일상태 } from '../@x/할일상태'

const taskDto = z.object({
  title: z.string().min(2),
  description: z.string(),
})

export const getResTasksDto = z.array(taskDto.extend({
  id: z.number(),
  status: z.nativeEnum(상수_할일상태),
}))
export const getPayloadTasksDto = z.any()

export const postResTasksDto = z.any()
export const postPayloadTasksDto = taskDto
