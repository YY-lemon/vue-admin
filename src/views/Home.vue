<template>
    <div>
        首页
    </div>
</template>
<script>
import {getUserList} from '@/api/api.js'
export default {
    data () {
        return {
            
        }
    },
    created() {
        let params = {params:{query:'',pagenum:1,pagesize:1}}
        getUserList(params).then(res => {
            console.log(res)
        })
    }
}
</script>
<style lang="scss" scoped>

</style>

