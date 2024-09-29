import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

export default function useCreateMessage() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: async (data) => {
      await request.post('/api/v1/events').send(data)
    },
    onSuccess: async () => {
      qc.invalidateQueries({ queryKey: ['message'] })
    },
  })
}
