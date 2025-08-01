import { useDark } from '@vueuse/core'

export const isDark = useDark()

export const toggleDark = () => {
    isDark.value = !isDark.value
}
