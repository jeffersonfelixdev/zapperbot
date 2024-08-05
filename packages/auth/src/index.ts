import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  ForcedSubject,
  MongoAbility,
} from '@casl/ability'

const actions = ['manage'] as const

const subjects = ['User', 'all'] as const

type AppAbilites = [
  (typeof actions)[number],
  (
    | (typeof subjects)[number]
    | ForcedSubject<Exclude<(typeof subjects)[number], 'all'>>
  ),
]

export type AppAbility = MongoAbility<AppAbilites>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

const { build } = new AbilityBuilder(createAppAbility)

export const ability = build()
