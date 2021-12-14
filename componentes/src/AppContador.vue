<template>
    <div>
        <h2>clicado {{ i }} vezes</h2>
        <button @click="contar">Contador</button>
    </div>
</template>

<script>

export default{
 
    data(){
        return {
            i: 0
        }
    },
    methods: {
        contar(){
            this.i++
        }
    }
 
}
</script>