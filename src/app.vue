<!--
  - Copyright 2019 sukawasatoru
  -
  - Licensed under the Apache License, Version 2.0 (the "License");
  - you may not use this file except in compliance with the License.
  - You may obtain a copy of the License at
  -
  -     http://www.apache.org/licenses/LICENSE-2.0
  -
  - Unless required by applicable law or agreed to in writing, software
  - distributed under the License is distributed on an "AS IS" BASIS,
  - WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  - See the License for the specific language governing permissions and
  - limitations under the License.
  -->

<template>
    <div>
        <div>
            Hello {{world}}
        </div>
        <div>
            {{worldObj.hello}} {{worldObj.world}}
        </div>
    </div>
</template>

<script lang="ts">
import {createComponent, state, value} from "vue-function-api";

function worldValue(this: void) {
    const world = value('World');
    setTimeout(() => world.value += '!', 2000);
    return world;
}

function worldObject(this: void) {
    const worldObject = state({hello: 'HELLO', world: 'WORLD'});
    setTimeout(() => worldObject.world += '!!', 3000);
    return worldObject;
}

export default createComponent({
    setup() {
        const world = worldValue();
        const worldObj = worldObject();
        return {
            world,
            worldObj,
        };
    },
});
</script>
