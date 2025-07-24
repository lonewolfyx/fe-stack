import type { NodeObj } from 'mind-elixir'

export function cNode(id: string, topic: string, url: string): NodeObj {
    return {
        id,
        topic,
        hyperLink: url,
    }
}
