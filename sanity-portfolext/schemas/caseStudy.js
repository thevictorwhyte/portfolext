export default {
    name: 'uxCaseStudy',
    title: 'UX Case Studie',
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
            name: 'studyUrl',
            title: 'Case Study Link',
            type: 'string'
        }
    ]
}