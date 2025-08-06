import type { IDependency, IPayload } from '~/types'
import dependenciesData from '~~/public/dependency.json'

const data = ref<IPayload>({})

export const isLoading = ref(true)

export const payload = computed(() => Object.freeze(toRaw(data.value!)))

export const init = () => {
    const result: IPayload = Object.create(null)

    for (const item of dependenciesData as IDependency[]) {
        const { main, children } = item.category

        const core = capitalize(main.toLowerCase())
        const child = capitalize(children.toLowerCase())

        if (!result[core]) {
            result[core] = {}
        }

        if (!result[core][child]) {
            result[core][child] = []
        }

        result[core][child].push(item)
    }
    const sorted: IPayload = Object.create(null)
    Object.keys(result)
        .sort((a, b) => a.localeCompare(b))
        .forEach((key) => {
            sorted[key] = result[key] as Record<string, IDependency[]>
        })

    data.value = sorted
    isLoading.value = false
}
