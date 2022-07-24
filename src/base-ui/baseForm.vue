<template>
    <div>
        <el-form labe-wdith="100px">
            <el-row>
                <template v-for="item in formItems" :key="item.label">
                    <el-col :span="8" v-bind="colLayout">
                        <el-form-item :label="item.label" :style="itemStyle">
                            <template v-if="item.type === 'input' || 'password'">
                                <el-input :placeholder="item.placeHolder" :show-password="item.type === 'password'" />
                            </template>
                            <template v-else-if="item.type === 'select'">
                                <el-select :placeholder="item.placeHolder">
                                    <el-option v-for="option in item.options" :value="option.value" :key="option.value">
                                        {{ option.title }}</el-option>
                                </el-select>
                            </template>
                            <template v-else-if="item.type === 'date'">
                                <el-date-picker v-bind="item.otherOptions"></el-date-picker>
                            </template>
                        </el-form-item>
                    </el-col>
                </template>
            </el-row>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from './baseFormType'
export default defineComponent({
    props: {
        formItems: {
            type: Array as PropType<IFormItem[]>
        },
        itemStyle: {
            type: Object,
            default: () => {
                return { padding: '10px 40px' }
            }
        },
        colLayout: {
            type: Object,
            default: () => {
                return {
                    xl: 6,
                    lg: 8,
                    md: 12,
                    sm: 24,
                    xs: 24
                }
            }
        }
    },
    setup() {
        return {}
    }
})
</script>

<style scoped>
</style>