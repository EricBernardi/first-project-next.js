import { z } from 'zod';


export const defaultValues = {
	nameCourse: '',
	detailCourse: '',
}

export const schema = z.object({
    nameCourse: z.string().nonempty({
        message: 'Nome é obrigatório' 
    }),
    detailCourse: z.string().nonempty({
        message: 'Detalhes é obrigatório'
    })
})