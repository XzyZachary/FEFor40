// 虚拟dom转真实dom

const vnode = {
    tag: 'DIV',
    attrs: {
        id: 'app'
    },
    children: [{
            tag: 'SPAN',
            children: [{
                tag: 'A',
                children: []
            }]
        },
        {
            tag: 'SPAN',
            children: [{
                    tag: 'A',
                    children: []
                },
                {
                    tag: 'A',
                    children: []
                }
            ]
        }
    ]
}

function render(vnode, container) {
    return container.appendChild(_render(vnode))
}

function _render(vnode) {
    if (typeof vnode == 'number') {
        vnode = String(vnode)
    }

    if (typeof vnode === 'string') {
        const textNode = document.createTextNode(vnode)
        return textNode;
    }

    if (typeof vnode.tag === 'function') {
        const component = createComponent(vnode.tag, vnode.attrs)

        setComponentProps(component, vnode.attrs)
        return component.base;
    }

    const dom = document.createElement(vnode.tag)

    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(key => {
            const value = vnode.attrs[key]
            setAttribute(dom,key,value)
        })
    }

    vnode.children.forEach(child => _render(child, dom))

    return dom
}