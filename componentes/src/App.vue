<template>
    <div>
        <hd/>
        <conta/>
    </div>
</template>

<script>

import conta from './AppContador.vue'
import hd from './AppHeader.vue'


export default{
    components: {
        conta,
        hd        
    }
}
</script>
