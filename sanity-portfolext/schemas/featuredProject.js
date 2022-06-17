export default {
    name: 'featuredProjects',
    title: 'Featured Projects',
    type: 'document',
    fields: [{
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'techUsed',
            title: 'Tech Used',
            type: 'string'
        },
        {
            name: 'sourceUrl',
            title: 'Github Source Link',
            type: 'string'
        },
        {
            name: 'liveUrl',
            title: 'Live Demo Link',
            type: 'string'
        },
        {
            name: 'embedId',
            title: 'Youtube Video EmbedId',
            type: 'string'
        },
    ]
}