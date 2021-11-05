import { Query } from "../decorators/Query";
import { Paging } from "../model/Paging";
export abstract class BaseRepository<T> {

    @Query()
    findAll: (paging?: Paging) => Promise<T[]>

    @Query()
    findById: (id: string) => Promise<T> | undefined

    @Query()
    create: (item: T) => Promise<T>

    @Query()
    update: (item: T) => Promise<T>

    @Query()
    delete: (id: Required<string>) => Promise<void>
}