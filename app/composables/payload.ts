import type { IDependency, IPayload } from '~/types'
import dependenciesData from '~~/public/dependency.json'

const data = ref<IPayload>({})

export const isLoading = ref(true)

export const payload = computed(() => Object.freeze(toRaw(data.value!)))

export const init = () => {
    const result: IPayload = Object.create(null)

    for (const item of dependenciesData as IDependency[]) {
        const { main, children } = item.category

        if (!result[main]) {
            result[main] = {}
        }

        if (!result[main][children]) {
            result[main][children] = []
        }

        result[main][children].push(item)
    }

    data.value = result
    isLoading.value = false
}
