import type { NPMDownloadResponse, NPMDownloadStats } from '~/types'
import { $fetch } from 'ofetch'

export const fetchNPMDownloads = async (packageName: string, period: string = 'last-month'): Promise<NPMDownloadStats> => {
    try {
        const url = `https://api.npmjs.org/downloads/point/${period}/${packageName}`

        const response = await $fetch<NPMDownloadResponse>(url, {
            timeout: 10000, // 10 second timeout
        })

        return {
            downloads: response.downloads || 0,
            period: period,
        }
    }
    catch (error) {
        console.error(`Failed to fetch NPM downloads for ${packageName}:`, error)

        // Return fallback data
        return {
            downloads: 0,
            period: period,
        }
    }
}
