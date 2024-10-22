import z from 'zod'

export const userSchema = () =>
  z.object({
    id: z.string({ description: 'Id do usuário' }),
    name: z.string({ description: 'Nome do usuário' }),
    email: z.string({ description: 'Email do usuário' }).email(),
    createdAt: z.date({ description: 'Data de criação do usuário' }),
    updatedAt: z.date({ description: 'Data de atualização do usuário' }),
  })

export const fullNameSchema = (message = 'Nome completo do usuário') =>
  z
    .string({
      description: message,
      required_error: `${message} é obrigatório`,
      invalid_type_error: `${message} deve ser em formato de texto.`,
    })
    .refine((value) => value.split(' ').length >= 2, {
      message: 'Digite o nome completo.',
    })
    .transform((value) => value.trim())

export const emailSchema = (message = 'Email do usuário') =>
  z
    .string({
      description: `Endereço de ${message}`,
      required_error: `${message} é obrigatório.`,
      invalid_type_error: `${message} deve ser do tipo texto.`,
    })
    .email({ message: 'Email inválido.' })
    .transform((value) => value.toLowerCase())

export const passwordSchema = (message = 'Senha do usuário') =>
  z
    .string({
      description: `${message}. Deve conter no mínimo 8 caracteres, com pelo menos uma letra minúscula, uma letra maiúscula, um número e um caracter especial (@$!%*?&)`,
      required_error: `${message} é obrigatória.`,
      invalid_type_error: `${message} deve ser em formato de texto.`,
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[(@#$!%*?&+-_=)])[A-Za-z\d(@#$!%*?&+-_=)]{8,}$/,
      {
        message:
          'A senha deve conter no mínimo 8 caracteres, com pelo menos uma letra minúscula, uma letra maiúscula, um número e um caracter especial (@#$!%*?&+-_=)',
      },
    )

export const confirmationCodeSchema = (message = 'Código de confirmação') =>
  z.string({
    description: `${message} enviado para o email, SMS ou WhatsApp`,
    required_error: `${message} é obrigatório.`,
    invalid_type_error: `${message} deve ser do tipo texto`,
  })
