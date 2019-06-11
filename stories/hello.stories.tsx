/*
 * Copyright 2019 sukawasatoru
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {storiesOf} from "@storybook/vue";
import Vue, {CreateElement, RenderContext, VNode} from 'vue';

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        interface Element extends VNode {
        }

        // tslint:disable no-empty-interface
        interface ElementClass extends Vue {
        }

        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
}

const Hello = Vue.extend({
    functional: true,
    render(h: CreateElement, hack: RenderContext<unknown>): VNode {
        return <div>
            Hello Stories
        </div>;
    },
});

storiesOf('Hello JSX', module)
    .add('JSX', () => ({
        render(h): VNode {
            return <Hello/>;
        }
    }));
