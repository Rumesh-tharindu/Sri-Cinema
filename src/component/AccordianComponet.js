import React, { Component } from 'react'
import Accordian from './Accordian'

export default class AccordianComponet extends Component {
    panels = [
        {
            label: 'What is Sri Cinema',
            content: 'Sri cinema is video streaming platform that you can watch movies,Tv serious,stage darama and short movies',
        },
        {
            label: 'How can You buy Movies',
            content: 'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
        },	
        {
            label: 'What is 7 day free trail',
            content: 'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
        },
        {
            label: 'How can I watch ',
            content: 'Many dyslexic people find it helpful to swap out a website\'s typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.',
        },
        {
            label: 'How to delete a account',
            content: 'SVG is awesome for icons! It\'s a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.'
        },
    ];
    render() {
       
        return (
            <div className="accordian" >
                <h1 className="text-center mb-5">Frequently Asked Question</h1>
               <Accordian panels={this.panels}/>
            </div>
        )
    }
}
