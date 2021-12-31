import { MdLink } from 'react-icons/md'

export default {
    name: 'menuItem',
    title: 'Menu Item',
    type: 'object',
    icon: MdLink,
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    ],
    preview: {
        select: {
            title: 'title',
            slug: 'slug.current',
        },
        prepare({ title, slug }) {
            return {
                title: `${title}`,
                subtitle: `${slug}`,
            }
        },
    },
}
