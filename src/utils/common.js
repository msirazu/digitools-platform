const getTagClass = (tag) => {
    const tagStyles = {
        popular: 'bg-tag-three text-one',
        new: 'bg-tag-one text-tag-two',
        'best seller': 'bg-tag-four text-tag-five'
    }
    return tagStyles[tag] || 'bg-gray-200 text';
}

export {getTagClass};