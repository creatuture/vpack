<template>
    <div>
        <el-table :data="data">
            <template v-if="tableType === 'auto' && columnFields.length > 0">
                <el-table-column v-for="column in columnFields"
                     :label="column.label" :prop="column.prop"/>
            </template>
            <template v-if="tableType === 'custom'">
                <slot></slot>
            </template>
        </el-table>

        <el-pagination class="page-wrap" :small="small"
           layout="prev, pager, next" :total="total"
            @current-change="changePage" :page-size="pageSize"
        ></el-pagination>
    </div>
</template>

<style lang="less">
    .page-wrap{
        margin: 20px auto;
    }
</style>

<script lang="ts">
    import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
    import { ColumnField, TableType } from "./FineTableType";

    @Component
    export default class FineTable extends Vue {
        @Prop({
            default: 'auto'
        })
        tableType: TableType;

        @Prop({
            required: true
        })
        data: Array<any>;

        @Prop({
            default: () => ([])
        })
        columnFields: ColumnField[];

        @Prop({
            type: Number,
            required: true
        })
        total: number;

        @Prop({
            type: Number,
            default: 20
        })
        pageSize: number;

        @Prop({
            type: Boolean,
            default: true
        })
        small: boolean;

        @Emit('changePage')
        changePage(page: number) {

        }

    }


</script>
