
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model trades
 * 
 */
export type trades = $Result.DefaultSelection<Prisma.$tradesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const tradeType: {
  buy: 'buy',
  sell: 'sell'
};

export type tradeType = (typeof tradeType)[keyof typeof tradeType]


export const orderStatus: {
  open: 'open',
  close: 'close'
};

export type orderStatus = (typeof orderStatus)[keyof typeof orderStatus]

}

export type tradeType = $Enums.tradeType

export const tradeType: typeof $Enums.tradeType

export type orderStatus = $Enums.orderStatus

export const orderStatus: typeof $Enums.orderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trades`: Exposes CRUD operations for the **trades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trades.findMany()
    * ```
    */
  get trades(): Prisma.tradesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    trades: 'trades'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "trades"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      trades: {
        payload: Prisma.$tradesPayload<ExtArgs>
        fields: Prisma.tradesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tradesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tradesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>
          }
          findFirst: {
            args: Prisma.tradesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tradesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>
          }
          findMany: {
            args: Prisma.tradesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>[]
          }
          create: {
            args: Prisma.tradesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>
          }
          createMany: {
            args: Prisma.tradesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tradesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>[]
          }
          delete: {
            args: Prisma.tradesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>
          }
          update: {
            args: Prisma.tradesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>
          }
          deleteMany: {
            args: Prisma.tradesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tradesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tradesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>[]
          }
          upsert: {
            args: Prisma.tradesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>
          }
          aggregate: {
            args: Prisma.TradesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrades>
          }
          groupBy: {
            args: Prisma.tradesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tradesCountArgs<ExtArgs>
            result: $Utils.Optional<TradesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    trades?: tradesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    trades: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trades?: boolean | UsersCountOutputTypeCountTradesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tradesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    balance: number | null
    balDecPos: number | null
  }

  export type UsersSumAggregateOutputType = {
    balance: number | null
    balDecPos: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    balance: number | null
    balDecPos: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    balance: number | null
    balDecPos: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    balance: number
    balDecPos: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    balance?: true
    balDecPos?: true
  }

  export type UsersSumAggregateInputType = {
    balance?: true
    balDecPos?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    balance?: true
    balDecPos?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    balance?: true
    balDecPos?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    balance?: true
    balDecPos?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    password: string
    balance: number
    balDecPos: number
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    balance?: boolean
    balDecPos?: boolean
    trades?: boolean | users$tradesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    balance?: boolean
    balDecPos?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    balance?: boolean
    balDecPos?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    balance?: boolean
    balDecPos?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "balance" | "balDecPos", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trades?: boolean | users$tradesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      trades: Prisma.$tradesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      balance: number
      balDecPos: number
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trades<T extends users$tradesArgs<ExtArgs> = {}>(args?: Subset<T, users$tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly balance: FieldRef<"users", 'Int'>
    readonly balDecPos: FieldRef<"users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.trades
   */
  export type users$tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    where?: tradesWhereInput
    orderBy?: tradesOrderByWithRelationInput | tradesOrderByWithRelationInput[]
    cursor?: tradesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradesScalarFieldEnum | TradesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model trades
   */

  export type AggregateTrades = {
    _count: TradesCountAggregateOutputType | null
    _avg: TradesAvgAggregateOutputType | null
    _sum: TradesSumAggregateOutputType | null
    _min: TradesMinAggregateOutputType | null
    _max: TradesMaxAggregateOutputType | null
  }

  export type TradesAvgAggregateOutputType = {
    margin: number | null
    marginDecPos: number | null
    leverage: number | null
    openPrice: number | null
    openPriceDecPos: number | null
    closePrice: number | null
    closePriceDecPos: number | null
    pnl: number | null
    pnlDecPos: number | null
    stopLoss: number | null
    stopLossDecPos: number | null
    takeProfit: number | null
    takeProfitDecPos: number | null
  }

  export type TradesSumAggregateOutputType = {
    margin: number | null
    marginDecPos: number | null
    leverage: number | null
    openPrice: number | null
    openPriceDecPos: number | null
    closePrice: number | null
    closePriceDecPos: number | null
    pnl: number | null
    pnlDecPos: number | null
    stopLoss: number | null
    stopLossDecPos: number | null
    takeProfit: number | null
    takeProfitDecPos: number | null
  }

  export type TradesMinAggregateOutputType = {
    id: string | null
    margin: number | null
    marginDecPos: number | null
    asset: string | null
    type: $Enums.tradeType | null
    leverage: number | null
    openPrice: number | null
    openPriceDecPos: number | null
    orderStatus: $Enums.orderStatus | null
    closePrice: number | null
    closePriceDecPos: number | null
    pnl: number | null
    pnlDecPos: number | null
    createdAt: Date | null
    stopLoss: number | null
    stopLossDecPos: number | null
    takeProfit: number | null
    takeProfitDecPos: number | null
    userId: string | null
  }

  export type TradesMaxAggregateOutputType = {
    id: string | null
    margin: number | null
    marginDecPos: number | null
    asset: string | null
    type: $Enums.tradeType | null
    leverage: number | null
    openPrice: number | null
    openPriceDecPos: number | null
    orderStatus: $Enums.orderStatus | null
    closePrice: number | null
    closePriceDecPos: number | null
    pnl: number | null
    pnlDecPos: number | null
    createdAt: Date | null
    stopLoss: number | null
    stopLossDecPos: number | null
    takeProfit: number | null
    takeProfitDecPos: number | null
    userId: string | null
  }

  export type TradesCountAggregateOutputType = {
    id: number
    margin: number
    marginDecPos: number
    asset: number
    type: number
    leverage: number
    openPrice: number
    openPriceDecPos: number
    orderStatus: number
    closePrice: number
    closePriceDecPos: number
    pnl: number
    pnlDecPos: number
    createdAt: number
    stopLoss: number
    stopLossDecPos: number
    takeProfit: number
    takeProfitDecPos: number
    userId: number
    _all: number
  }


  export type TradesAvgAggregateInputType = {
    margin?: true
    marginDecPos?: true
    leverage?: true
    openPrice?: true
    openPriceDecPos?: true
    closePrice?: true
    closePriceDecPos?: true
    pnl?: true
    pnlDecPos?: true
    stopLoss?: true
    stopLossDecPos?: true
    takeProfit?: true
    takeProfitDecPos?: true
  }

  export type TradesSumAggregateInputType = {
    margin?: true
    marginDecPos?: true
    leverage?: true
    openPrice?: true
    openPriceDecPos?: true
    closePrice?: true
    closePriceDecPos?: true
    pnl?: true
    pnlDecPos?: true
    stopLoss?: true
    stopLossDecPos?: true
    takeProfit?: true
    takeProfitDecPos?: true
  }

  export type TradesMinAggregateInputType = {
    id?: true
    margin?: true
    marginDecPos?: true
    asset?: true
    type?: true
    leverage?: true
    openPrice?: true
    openPriceDecPos?: true
    orderStatus?: true
    closePrice?: true
    closePriceDecPos?: true
    pnl?: true
    pnlDecPos?: true
    createdAt?: true
    stopLoss?: true
    stopLossDecPos?: true
    takeProfit?: true
    takeProfitDecPos?: true
    userId?: true
  }

  export type TradesMaxAggregateInputType = {
    id?: true
    margin?: true
    marginDecPos?: true
    asset?: true
    type?: true
    leverage?: true
    openPrice?: true
    openPriceDecPos?: true
    orderStatus?: true
    closePrice?: true
    closePriceDecPos?: true
    pnl?: true
    pnlDecPos?: true
    createdAt?: true
    stopLoss?: true
    stopLossDecPos?: true
    takeProfit?: true
    takeProfitDecPos?: true
    userId?: true
  }

  export type TradesCountAggregateInputType = {
    id?: true
    margin?: true
    marginDecPos?: true
    asset?: true
    type?: true
    leverage?: true
    openPrice?: true
    openPriceDecPos?: true
    orderStatus?: true
    closePrice?: true
    closePriceDecPos?: true
    pnl?: true
    pnlDecPos?: true
    createdAt?: true
    stopLoss?: true
    stopLossDecPos?: true
    takeProfit?: true
    takeProfitDecPos?: true
    userId?: true
    _all?: true
  }

  export type TradesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trades to aggregate.
     */
    where?: tradesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trades to fetch.
     */
    orderBy?: tradesOrderByWithRelationInput | tradesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tradesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trades
    **/
    _count?: true | TradesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradesMaxAggregateInputType
  }

  export type GetTradesAggregateType<T extends TradesAggregateArgs> = {
        [P in keyof T & keyof AggregateTrades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrades[P]>
      : GetScalarType<T[P], AggregateTrades[P]>
  }




  export type tradesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tradesWhereInput
    orderBy?: tradesOrderByWithAggregationInput | tradesOrderByWithAggregationInput[]
    by: TradesScalarFieldEnum[] | TradesScalarFieldEnum
    having?: tradesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradesCountAggregateInputType | true
    _avg?: TradesAvgAggregateInputType
    _sum?: TradesSumAggregateInputType
    _min?: TradesMinAggregateInputType
    _max?: TradesMaxAggregateInputType
  }

  export type TradesGroupByOutputType = {
    id: string
    margin: number
    marginDecPos: number
    asset: string
    type: $Enums.tradeType
    leverage: number
    openPrice: number
    openPriceDecPos: number
    orderStatus: $Enums.orderStatus
    closePrice: number | null
    closePriceDecPos: number | null
    pnl: number | null
    pnlDecPos: number | null
    createdAt: Date
    stopLoss: number | null
    stopLossDecPos: number | null
    takeProfit: number | null
    takeProfitDecPos: number | null
    userId: string
    _count: TradesCountAggregateOutputType | null
    _avg: TradesAvgAggregateOutputType | null
    _sum: TradesSumAggregateOutputType | null
    _min: TradesMinAggregateOutputType | null
    _max: TradesMaxAggregateOutputType | null
  }

  type GetTradesGroupByPayload<T extends tradesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradesGroupByOutputType[P]>
            : GetScalarType<T[P], TradesGroupByOutputType[P]>
        }
      >
    >


  export type tradesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    margin?: boolean
    marginDecPos?: boolean
    asset?: boolean
    type?: boolean
    leverage?: boolean
    openPrice?: boolean
    openPriceDecPos?: boolean
    orderStatus?: boolean
    closePrice?: boolean
    closePriceDecPos?: boolean
    pnl?: boolean
    pnlDecPos?: boolean
    createdAt?: boolean
    stopLoss?: boolean
    stopLossDecPos?: boolean
    takeProfit?: boolean
    takeProfitDecPos?: boolean
    userId?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trades"]>

  export type tradesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    margin?: boolean
    marginDecPos?: boolean
    asset?: boolean
    type?: boolean
    leverage?: boolean
    openPrice?: boolean
    openPriceDecPos?: boolean
    orderStatus?: boolean
    closePrice?: boolean
    closePriceDecPos?: boolean
    pnl?: boolean
    pnlDecPos?: boolean
    createdAt?: boolean
    stopLoss?: boolean
    stopLossDecPos?: boolean
    takeProfit?: boolean
    takeProfitDecPos?: boolean
    userId?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trades"]>

  export type tradesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    margin?: boolean
    marginDecPos?: boolean
    asset?: boolean
    type?: boolean
    leverage?: boolean
    openPrice?: boolean
    openPriceDecPos?: boolean
    orderStatus?: boolean
    closePrice?: boolean
    closePriceDecPos?: boolean
    pnl?: boolean
    pnlDecPos?: boolean
    createdAt?: boolean
    stopLoss?: boolean
    stopLossDecPos?: boolean
    takeProfit?: boolean
    takeProfitDecPos?: boolean
    userId?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trades"]>

  export type tradesSelectScalar = {
    id?: boolean
    margin?: boolean
    marginDecPos?: boolean
    asset?: boolean
    type?: boolean
    leverage?: boolean
    openPrice?: boolean
    openPriceDecPos?: boolean
    orderStatus?: boolean
    closePrice?: boolean
    closePriceDecPos?: boolean
    pnl?: boolean
    pnlDecPos?: boolean
    createdAt?: boolean
    stopLoss?: boolean
    stopLossDecPos?: boolean
    takeProfit?: boolean
    takeProfitDecPos?: boolean
    userId?: boolean
  }

  export type tradesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "margin" | "marginDecPos" | "asset" | "type" | "leverage" | "openPrice" | "openPriceDecPos" | "orderStatus" | "closePrice" | "closePriceDecPos" | "pnl" | "pnlDecPos" | "createdAt" | "stopLoss" | "stopLossDecPos" | "takeProfit" | "takeProfitDecPos" | "userId", ExtArgs["result"]["trades"]>
  export type tradesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type tradesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type tradesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $tradesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trades"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      margin: number
      marginDecPos: number
      asset: string
      type: $Enums.tradeType
      leverage: number
      openPrice: number
      openPriceDecPos: number
      orderStatus: $Enums.orderStatus
      closePrice: number | null
      closePriceDecPos: number | null
      pnl: number | null
      pnlDecPos: number | null
      createdAt: Date
      stopLoss: number | null
      stopLossDecPos: number | null
      takeProfit: number | null
      takeProfitDecPos: number | null
      userId: string
    }, ExtArgs["result"]["trades"]>
    composites: {}
  }

  type tradesGetPayload<S extends boolean | null | undefined | tradesDefaultArgs> = $Result.GetResult<Prisma.$tradesPayload, S>

  type tradesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tradesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradesCountAggregateInputType | true
    }

  export interface tradesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trades'], meta: { name: 'trades' } }
    /**
     * Find zero or one Trades that matches the filter.
     * @param {tradesFindUniqueArgs} args - Arguments to find a Trades
     * @example
     * // Get one Trades
     * const trades = await prisma.trades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tradesFindUniqueArgs>(args: SelectSubset<T, tradesFindUniqueArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tradesFindUniqueOrThrowArgs} args - Arguments to find a Trades
     * @example
     * // Get one Trades
     * const trades = await prisma.trades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tradesFindUniqueOrThrowArgs>(args: SelectSubset<T, tradesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradesFindFirstArgs} args - Arguments to find a Trades
     * @example
     * // Get one Trades
     * const trades = await prisma.trades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tradesFindFirstArgs>(args?: SelectSubset<T, tradesFindFirstArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradesFindFirstOrThrowArgs} args - Arguments to find a Trades
     * @example
     * // Get one Trades
     * const trades = await prisma.trades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tradesFindFirstOrThrowArgs>(args?: SelectSubset<T, tradesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trades.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trades.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradesWithIdOnly = await prisma.trades.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tradesFindManyArgs>(args?: SelectSubset<T, tradesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trades.
     * @param {tradesCreateArgs} args - Arguments to create a Trades.
     * @example
     * // Create one Trades
     * const Trades = await prisma.trades.create({
     *   data: {
     *     // ... data to create a Trades
     *   }
     * })
     * 
     */
    create<T extends tradesCreateArgs>(args: SelectSubset<T, tradesCreateArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trades.
     * @param {tradesCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trades = await prisma.trades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tradesCreateManyArgs>(args?: SelectSubset<T, tradesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {tradesCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trades = await prisma.trades.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trades and only return the `id`
     * const tradesWithIdOnly = await prisma.trades.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tradesCreateManyAndReturnArgs>(args?: SelectSubset<T, tradesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trades.
     * @param {tradesDeleteArgs} args - Arguments to delete one Trades.
     * @example
     * // Delete one Trades
     * const Trades = await prisma.trades.delete({
     *   where: {
     *     // ... filter to delete one Trades
     *   }
     * })
     * 
     */
    delete<T extends tradesDeleteArgs>(args: SelectSubset<T, tradesDeleteArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trades.
     * @param {tradesUpdateArgs} args - Arguments to update one Trades.
     * @example
     * // Update one Trades
     * const trades = await prisma.trades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tradesUpdateArgs>(args: SelectSubset<T, tradesUpdateArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trades.
     * @param {tradesDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tradesDeleteManyArgs>(args?: SelectSubset<T, tradesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trades = await prisma.trades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tradesUpdateManyArgs>(args: SelectSubset<T, tradesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades and returns the data updated in the database.
     * @param {tradesUpdateManyAndReturnArgs} args - Arguments to update many Trades.
     * @example
     * // Update many Trades
     * const trades = await prisma.trades.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trades and only return the `id`
     * const tradesWithIdOnly = await prisma.trades.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tradesUpdateManyAndReturnArgs>(args: SelectSubset<T, tradesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trades.
     * @param {tradesUpsertArgs} args - Arguments to update or create a Trades.
     * @example
     * // Update or create a Trades
     * const trades = await prisma.trades.upsert({
     *   create: {
     *     // ... data to create a Trades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trades we want to update
     *   }
     * })
     */
    upsert<T extends tradesUpsertArgs>(args: SelectSubset<T, tradesUpsertArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradesCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trades.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends tradesCountArgs>(
      args?: Subset<T, tradesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradesAggregateArgs>(args: Subset<T, TradesAggregateArgs>): Prisma.PrismaPromise<GetTradesAggregateType<T>>

    /**
     * Group by Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tradesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tradesGroupByArgs['orderBy'] }
        : { orderBy?: tradesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tradesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trades model
   */
  readonly fields: tradesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tradesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the trades model
   */
  interface tradesFieldRefs {
    readonly id: FieldRef<"trades", 'String'>
    readonly margin: FieldRef<"trades", 'Int'>
    readonly marginDecPos: FieldRef<"trades", 'Int'>
    readonly asset: FieldRef<"trades", 'String'>
    readonly type: FieldRef<"trades", 'tradeType'>
    readonly leverage: FieldRef<"trades", 'Int'>
    readonly openPrice: FieldRef<"trades", 'Int'>
    readonly openPriceDecPos: FieldRef<"trades", 'Int'>
    readonly orderStatus: FieldRef<"trades", 'orderStatus'>
    readonly closePrice: FieldRef<"trades", 'Int'>
    readonly closePriceDecPos: FieldRef<"trades", 'Int'>
    readonly pnl: FieldRef<"trades", 'Int'>
    readonly pnlDecPos: FieldRef<"trades", 'Int'>
    readonly createdAt: FieldRef<"trades", 'DateTime'>
    readonly stopLoss: FieldRef<"trades", 'Int'>
    readonly stopLossDecPos: FieldRef<"trades", 'Int'>
    readonly takeProfit: FieldRef<"trades", 'Int'>
    readonly takeProfitDecPos: FieldRef<"trades", 'Int'>
    readonly userId: FieldRef<"trades", 'String'>
  }
    

  // Custom InputTypes
  /**
   * trades findUnique
   */
  export type tradesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * Filter, which trades to fetch.
     */
    where: tradesWhereUniqueInput
  }

  /**
   * trades findUniqueOrThrow
   */
  export type tradesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * Filter, which trades to fetch.
     */
    where: tradesWhereUniqueInput
  }

  /**
   * trades findFirst
   */
  export type tradesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * Filter, which trades to fetch.
     */
    where?: tradesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trades to fetch.
     */
    orderBy?: tradesOrderByWithRelationInput | tradesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trades.
     */
    cursor?: tradesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trades.
     */
    distinct?: TradesScalarFieldEnum | TradesScalarFieldEnum[]
  }

  /**
   * trades findFirstOrThrow
   */
  export type tradesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * Filter, which trades to fetch.
     */
    where?: tradesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trades to fetch.
     */
    orderBy?: tradesOrderByWithRelationInput | tradesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trades.
     */
    cursor?: tradesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trades.
     */
    distinct?: TradesScalarFieldEnum | TradesScalarFieldEnum[]
  }

  /**
   * trades findMany
   */
  export type tradesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * Filter, which trades to fetch.
     */
    where?: tradesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trades to fetch.
     */
    orderBy?: tradesOrderByWithRelationInput | tradesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trades.
     */
    cursor?: tradesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trades.
     */
    skip?: number
    distinct?: TradesScalarFieldEnum | TradesScalarFieldEnum[]
  }

  /**
   * trades create
   */
  export type tradesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * The data needed to create a trades.
     */
    data: XOR<tradesCreateInput, tradesUncheckedCreateInput>
  }

  /**
   * trades createMany
   */
  export type tradesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trades.
     */
    data: tradesCreateManyInput | tradesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trades createManyAndReturn
   */
  export type tradesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * The data used to create many trades.
     */
    data: tradesCreateManyInput | tradesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * trades update
   */
  export type tradesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * The data needed to update a trades.
     */
    data: XOR<tradesUpdateInput, tradesUncheckedUpdateInput>
    /**
     * Choose, which trades to update.
     */
    where: tradesWhereUniqueInput
  }

  /**
   * trades updateMany
   */
  export type tradesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trades.
     */
    data: XOR<tradesUpdateManyMutationInput, tradesUncheckedUpdateManyInput>
    /**
     * Filter which trades to update
     */
    where?: tradesWhereInput
    /**
     * Limit how many trades to update.
     */
    limit?: number
  }

  /**
   * trades updateManyAndReturn
   */
  export type tradesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * The data used to update trades.
     */
    data: XOR<tradesUpdateManyMutationInput, tradesUncheckedUpdateManyInput>
    /**
     * Filter which trades to update
     */
    where?: tradesWhereInput
    /**
     * Limit how many trades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * trades upsert
   */
  export type tradesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * The filter to search for the trades to update in case it exists.
     */
    where: tradesWhereUniqueInput
    /**
     * In case the trades found by the `where` argument doesn't exist, create a new trades with this data.
     */
    create: XOR<tradesCreateInput, tradesUncheckedCreateInput>
    /**
     * In case the trades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tradesUpdateInput, tradesUncheckedUpdateInput>
  }

  /**
   * trades delete
   */
  export type tradesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * Filter which trades to delete.
     */
    where: tradesWhereUniqueInput
  }

  /**
   * trades deleteMany
   */
  export type tradesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trades to delete
     */
    where?: tradesWhereInput
    /**
     * Limit how many trades to delete.
     */
    limit?: number
  }

  /**
   * trades without action
   */
  export type tradesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    balance: 'balance',
    balDecPos: 'balDecPos'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const TradesScalarFieldEnum: {
    id: 'id',
    margin: 'margin',
    marginDecPos: 'marginDecPos',
    asset: 'asset',
    type: 'type',
    leverage: 'leverage',
    openPrice: 'openPrice',
    openPriceDecPos: 'openPriceDecPos',
    orderStatus: 'orderStatus',
    closePrice: 'closePrice',
    closePriceDecPos: 'closePriceDecPos',
    pnl: 'pnl',
    pnlDecPos: 'pnlDecPos',
    createdAt: 'createdAt',
    stopLoss: 'stopLoss',
    stopLossDecPos: 'stopLossDecPos',
    takeProfit: 'takeProfit',
    takeProfitDecPos: 'takeProfitDecPos',
    userId: 'userId'
  };

  export type TradesScalarFieldEnum = (typeof TradesScalarFieldEnum)[keyof typeof TradesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'tradeType'
   */
  export type EnumtradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tradeType'>
    


  /**
   * Reference to a field of type 'tradeType[]'
   */
  export type ListEnumtradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tradeType[]'>
    


  /**
   * Reference to a field of type 'orderStatus'
   */
  export type EnumorderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orderStatus'>
    


  /**
   * Reference to a field of type 'orderStatus[]'
   */
  export type ListEnumorderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orderStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    balance?: IntFilter<"users"> | number
    balDecPos?: IntFilter<"users"> | number
    trades?: TradesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    balDecPos?: SortOrder
    trades?: tradesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    balance?: IntFilter<"users"> | number
    balDecPos?: IntFilter<"users"> | number
    trades?: TradesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    balDecPos?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    balance?: IntWithAggregatesFilter<"users"> | number
    balDecPos?: IntWithAggregatesFilter<"users"> | number
  }

  export type tradesWhereInput = {
    AND?: tradesWhereInput | tradesWhereInput[]
    OR?: tradesWhereInput[]
    NOT?: tradesWhereInput | tradesWhereInput[]
    id?: StringFilter<"trades"> | string
    margin?: IntFilter<"trades"> | number
    marginDecPos?: IntFilter<"trades"> | number
    asset?: StringFilter<"trades"> | string
    type?: EnumtradeTypeFilter<"trades"> | $Enums.tradeType
    leverage?: IntFilter<"trades"> | number
    openPrice?: IntFilter<"trades"> | number
    openPriceDecPos?: IntFilter<"trades"> | number
    orderStatus?: EnumorderStatusFilter<"trades"> | $Enums.orderStatus
    closePrice?: IntNullableFilter<"trades"> | number | null
    closePriceDecPos?: IntNullableFilter<"trades"> | number | null
    pnl?: IntNullableFilter<"trades"> | number | null
    pnlDecPos?: IntNullableFilter<"trades"> | number | null
    createdAt?: DateTimeFilter<"trades"> | Date | string
    stopLoss?: IntNullableFilter<"trades"> | number | null
    stopLossDecPos?: IntNullableFilter<"trades"> | number | null
    takeProfit?: IntNullableFilter<"trades"> | number | null
    takeProfitDecPos?: IntNullableFilter<"trades"> | number | null
    userId?: StringFilter<"trades"> | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type tradesOrderByWithRelationInput = {
    id?: SortOrder
    margin?: SortOrder
    marginDecPos?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    openPriceDecPos?: SortOrder
    orderStatus?: SortOrder
    closePrice?: SortOrderInput | SortOrder
    closePriceDecPos?: SortOrderInput | SortOrder
    pnl?: SortOrderInput | SortOrder
    pnlDecPos?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    stopLoss?: SortOrderInput | SortOrder
    stopLossDecPos?: SortOrderInput | SortOrder
    takeProfit?: SortOrderInput | SortOrder
    takeProfitDecPos?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type tradesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tradesWhereInput | tradesWhereInput[]
    OR?: tradesWhereInput[]
    NOT?: tradesWhereInput | tradesWhereInput[]
    margin?: IntFilter<"trades"> | number
    marginDecPos?: IntFilter<"trades"> | number
    asset?: StringFilter<"trades"> | string
    type?: EnumtradeTypeFilter<"trades"> | $Enums.tradeType
    leverage?: IntFilter<"trades"> | number
    openPrice?: IntFilter<"trades"> | number
    openPriceDecPos?: IntFilter<"trades"> | number
    orderStatus?: EnumorderStatusFilter<"trades"> | $Enums.orderStatus
    closePrice?: IntNullableFilter<"trades"> | number | null
    closePriceDecPos?: IntNullableFilter<"trades"> | number | null
    pnl?: IntNullableFilter<"trades"> | number | null
    pnlDecPos?: IntNullableFilter<"trades"> | number | null
    createdAt?: DateTimeFilter<"trades"> | Date | string
    stopLoss?: IntNullableFilter<"trades"> | number | null
    stopLossDecPos?: IntNullableFilter<"trades"> | number | null
    takeProfit?: IntNullableFilter<"trades"> | number | null
    takeProfitDecPos?: IntNullableFilter<"trades"> | number | null
    userId?: StringFilter<"trades"> | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type tradesOrderByWithAggregationInput = {
    id?: SortOrder
    margin?: SortOrder
    marginDecPos?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    openPriceDecPos?: SortOrder
    orderStatus?: SortOrder
    closePrice?: SortOrderInput | SortOrder
    closePriceDecPos?: SortOrderInput | SortOrder
    pnl?: SortOrderInput | SortOrder
    pnlDecPos?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    stopLoss?: SortOrderInput | SortOrder
    stopLossDecPos?: SortOrderInput | SortOrder
    takeProfit?: SortOrderInput | SortOrder
    takeProfitDecPos?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: tradesCountOrderByAggregateInput
    _avg?: tradesAvgOrderByAggregateInput
    _max?: tradesMaxOrderByAggregateInput
    _min?: tradesMinOrderByAggregateInput
    _sum?: tradesSumOrderByAggregateInput
  }

  export type tradesScalarWhereWithAggregatesInput = {
    AND?: tradesScalarWhereWithAggregatesInput | tradesScalarWhereWithAggregatesInput[]
    OR?: tradesScalarWhereWithAggregatesInput[]
    NOT?: tradesScalarWhereWithAggregatesInput | tradesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"trades"> | string
    margin?: IntWithAggregatesFilter<"trades"> | number
    marginDecPos?: IntWithAggregatesFilter<"trades"> | number
    asset?: StringWithAggregatesFilter<"trades"> | string
    type?: EnumtradeTypeWithAggregatesFilter<"trades"> | $Enums.tradeType
    leverage?: IntWithAggregatesFilter<"trades"> | number
    openPrice?: IntWithAggregatesFilter<"trades"> | number
    openPriceDecPos?: IntWithAggregatesFilter<"trades"> | number
    orderStatus?: EnumorderStatusWithAggregatesFilter<"trades"> | $Enums.orderStatus
    closePrice?: IntNullableWithAggregatesFilter<"trades"> | number | null
    closePriceDecPos?: IntNullableWithAggregatesFilter<"trades"> | number | null
    pnl?: IntNullableWithAggregatesFilter<"trades"> | number | null
    pnlDecPos?: IntNullableWithAggregatesFilter<"trades"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"trades"> | Date | string
    stopLoss?: IntNullableWithAggregatesFilter<"trades"> | number | null
    stopLossDecPos?: IntNullableWithAggregatesFilter<"trades"> | number | null
    takeProfit?: IntNullableWithAggregatesFilter<"trades"> | number | null
    takeProfitDecPos?: IntNullableWithAggregatesFilter<"trades"> | number | null
    userId?: StringWithAggregatesFilter<"trades"> | string
  }

  export type usersCreateInput = {
    id?: string
    email: string
    password: string
    balance?: number
    balDecPos?: number
    trades?: tradesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    balance?: number
    balDecPos?: number
    trades?: tradesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    balDecPos?: IntFieldUpdateOperationsInput | number
    trades?: tradesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    balDecPos?: IntFieldUpdateOperationsInput | number
    trades?: tradesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    password: string
    balance?: number
    balDecPos?: number
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    balDecPos?: IntFieldUpdateOperationsInput | number
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    balDecPos?: IntFieldUpdateOperationsInput | number
  }

  export type tradesCreateInput = {
    id?: string
    margin: number
    marginDecPos?: number
    asset: string
    type: $Enums.tradeType
    leverage: number
    openPrice: number
    openPriceDecPos?: number
    orderStatus?: $Enums.orderStatus
    closePrice?: number | null
    closePriceDecPos?: number | null
    pnl?: number | null
    pnlDecPos?: number | null
    createdAt?: Date | string
    stopLoss?: number | null
    stopLossDecPos?: number | null
    takeProfit?: number | null
    takeProfitDecPos?: number | null
    user: usersCreateNestedOneWithoutTradesInput
  }

  export type tradesUncheckedCreateInput = {
    id?: string
    margin: number
    marginDecPos?: number
    asset: string
    type: $Enums.tradeType
    leverage: number
    openPrice: number
    openPriceDecPos?: number
    orderStatus?: $Enums.orderStatus
    closePrice?: number | null
    closePriceDecPos?: number | null
    pnl?: number | null
    pnlDecPos?: number | null
    createdAt?: Date | string
    stopLoss?: number | null
    stopLossDecPos?: number | null
    takeProfit?: number | null
    takeProfitDecPos?: number | null
    userId: string
  }

  export type tradesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    marginDecPos?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    type?: EnumtradeTypeFieldUpdateOperationsInput | $Enums.tradeType
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    openPriceDecPos?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    closePrice?: NullableIntFieldUpdateOperationsInput | number | null
    closePriceDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: NullableIntFieldUpdateOperationsInput | number | null
    pnlDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    stopLossDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfitDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    user?: usersUpdateOneRequiredWithoutTradesNestedInput
  }

  export type tradesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    marginDecPos?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    type?: EnumtradeTypeFieldUpdateOperationsInput | $Enums.tradeType
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    openPriceDecPos?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    closePrice?: NullableIntFieldUpdateOperationsInput | number | null
    closePriceDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: NullableIntFieldUpdateOperationsInput | number | null
    pnlDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    stopLossDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfitDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type tradesCreateManyInput = {
    id?: string
    margin: number
    marginDecPos?: number
    asset: string
    type: $Enums.tradeType
    leverage: number
    openPrice: number
    openPriceDecPos?: number
    orderStatus?: $Enums.orderStatus
    closePrice?: number | null
    closePriceDecPos?: number | null
    pnl?: number | null
    pnlDecPos?: number | null
    createdAt?: Date | string
    stopLoss?: number | null
    stopLossDecPos?: number | null
    takeProfit?: number | null
    takeProfitDecPos?: number | null
    userId: string
  }

  export type tradesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    marginDecPos?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    type?: EnumtradeTypeFieldUpdateOperationsInput | $Enums.tradeType
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    openPriceDecPos?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    closePrice?: NullableIntFieldUpdateOperationsInput | number | null
    closePriceDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: NullableIntFieldUpdateOperationsInput | number | null
    pnlDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    stopLossDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfitDecPos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tradesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    marginDecPos?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    type?: EnumtradeTypeFieldUpdateOperationsInput | $Enums.tradeType
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    openPriceDecPos?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    closePrice?: NullableIntFieldUpdateOperationsInput | number | null
    closePriceDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: NullableIntFieldUpdateOperationsInput | number | null
    pnlDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    stopLossDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfitDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TradesListRelationFilter = {
    every?: tradesWhereInput
    some?: tradesWhereInput
    none?: tradesWhereInput
  }

  export type tradesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    balDecPos?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    balance?: SortOrder
    balDecPos?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    balDecPos?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    balDecPos?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    balance?: SortOrder
    balDecPos?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumtradeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.tradeType | EnumtradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.tradeType[] | ListEnumtradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.tradeType[] | ListEnumtradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtradeTypeFilter<$PrismaModel> | $Enums.tradeType
  }

  export type EnumorderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.orderStatus | EnumorderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumorderStatusFilter<$PrismaModel> | $Enums.orderStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tradesCountOrderByAggregateInput = {
    id?: SortOrder
    margin?: SortOrder
    marginDecPos?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    openPriceDecPos?: SortOrder
    orderStatus?: SortOrder
    closePrice?: SortOrder
    closePriceDecPos?: SortOrder
    pnl?: SortOrder
    pnlDecPos?: SortOrder
    createdAt?: SortOrder
    stopLoss?: SortOrder
    stopLossDecPos?: SortOrder
    takeProfit?: SortOrder
    takeProfitDecPos?: SortOrder
    userId?: SortOrder
  }

  export type tradesAvgOrderByAggregateInput = {
    margin?: SortOrder
    marginDecPos?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    openPriceDecPos?: SortOrder
    closePrice?: SortOrder
    closePriceDecPos?: SortOrder
    pnl?: SortOrder
    pnlDecPos?: SortOrder
    stopLoss?: SortOrder
    stopLossDecPos?: SortOrder
    takeProfit?: SortOrder
    takeProfitDecPos?: SortOrder
  }

  export type tradesMaxOrderByAggregateInput = {
    id?: SortOrder
    margin?: SortOrder
    marginDecPos?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    openPriceDecPos?: SortOrder
    orderStatus?: SortOrder
    closePrice?: SortOrder
    closePriceDecPos?: SortOrder
    pnl?: SortOrder
    pnlDecPos?: SortOrder
    createdAt?: SortOrder
    stopLoss?: SortOrder
    stopLossDecPos?: SortOrder
    takeProfit?: SortOrder
    takeProfitDecPos?: SortOrder
    userId?: SortOrder
  }

  export type tradesMinOrderByAggregateInput = {
    id?: SortOrder
    margin?: SortOrder
    marginDecPos?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    openPriceDecPos?: SortOrder
    orderStatus?: SortOrder
    closePrice?: SortOrder
    closePriceDecPos?: SortOrder
    pnl?: SortOrder
    pnlDecPos?: SortOrder
    createdAt?: SortOrder
    stopLoss?: SortOrder
    stopLossDecPos?: SortOrder
    takeProfit?: SortOrder
    takeProfitDecPos?: SortOrder
    userId?: SortOrder
  }

  export type tradesSumOrderByAggregateInput = {
    margin?: SortOrder
    marginDecPos?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    openPriceDecPos?: SortOrder
    closePrice?: SortOrder
    closePriceDecPos?: SortOrder
    pnl?: SortOrder
    pnlDecPos?: SortOrder
    stopLoss?: SortOrder
    stopLossDecPos?: SortOrder
    takeProfit?: SortOrder
    takeProfitDecPos?: SortOrder
  }

  export type EnumtradeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tradeType | EnumtradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.tradeType[] | ListEnumtradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.tradeType[] | ListEnumtradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtradeTypeWithAggregatesFilter<$PrismaModel> | $Enums.tradeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtradeTypeFilter<$PrismaModel>
    _max?: NestedEnumtradeTypeFilter<$PrismaModel>
  }

  export type EnumorderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orderStatus | EnumorderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumorderStatusWithAggregatesFilter<$PrismaModel> | $Enums.orderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorderStatusFilter<$PrismaModel>
    _max?: NestedEnumorderStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type tradesCreateNestedManyWithoutUserInput = {
    create?: XOR<tradesCreateWithoutUserInput, tradesUncheckedCreateWithoutUserInput> | tradesCreateWithoutUserInput[] | tradesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tradesCreateOrConnectWithoutUserInput | tradesCreateOrConnectWithoutUserInput[]
    createMany?: tradesCreateManyUserInputEnvelope
    connect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
  }

  export type tradesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<tradesCreateWithoutUserInput, tradesUncheckedCreateWithoutUserInput> | tradesCreateWithoutUserInput[] | tradesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tradesCreateOrConnectWithoutUserInput | tradesCreateOrConnectWithoutUserInput[]
    createMany?: tradesCreateManyUserInputEnvelope
    connect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tradesUpdateManyWithoutUserNestedInput = {
    create?: XOR<tradesCreateWithoutUserInput, tradesUncheckedCreateWithoutUserInput> | tradesCreateWithoutUserInput[] | tradesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tradesCreateOrConnectWithoutUserInput | tradesCreateOrConnectWithoutUserInput[]
    upsert?: tradesUpsertWithWhereUniqueWithoutUserInput | tradesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tradesCreateManyUserInputEnvelope
    set?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    disconnect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    delete?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    connect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    update?: tradesUpdateWithWhereUniqueWithoutUserInput | tradesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tradesUpdateManyWithWhereWithoutUserInput | tradesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tradesScalarWhereInput | tradesScalarWhereInput[]
  }

  export type tradesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<tradesCreateWithoutUserInput, tradesUncheckedCreateWithoutUserInput> | tradesCreateWithoutUserInput[] | tradesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tradesCreateOrConnectWithoutUserInput | tradesCreateOrConnectWithoutUserInput[]
    upsert?: tradesUpsertWithWhereUniqueWithoutUserInput | tradesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tradesCreateManyUserInputEnvelope
    set?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    disconnect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    delete?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    connect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    update?: tradesUpdateWithWhereUniqueWithoutUserInput | tradesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tradesUpdateManyWithWhereWithoutUserInput | tradesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tradesScalarWhereInput | tradesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutTradesInput = {
    create?: XOR<usersCreateWithoutTradesInput, usersUncheckedCreateWithoutTradesInput>
    connectOrCreate?: usersCreateOrConnectWithoutTradesInput
    connect?: usersWhereUniqueInput
  }

  export type EnumtradeTypeFieldUpdateOperationsInput = {
    set?: $Enums.tradeType
  }

  export type EnumorderStatusFieldUpdateOperationsInput = {
    set?: $Enums.orderStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutTradesNestedInput = {
    create?: XOR<usersCreateWithoutTradesInput, usersUncheckedCreateWithoutTradesInput>
    connectOrCreate?: usersCreateOrConnectWithoutTradesInput
    upsert?: usersUpsertWithoutTradesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTradesInput, usersUpdateWithoutTradesInput>, usersUncheckedUpdateWithoutTradesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumtradeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.tradeType | EnumtradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.tradeType[] | ListEnumtradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.tradeType[] | ListEnumtradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtradeTypeFilter<$PrismaModel> | $Enums.tradeType
  }

  export type NestedEnumorderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.orderStatus | EnumorderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumorderStatusFilter<$PrismaModel> | $Enums.orderStatus
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumtradeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tradeType | EnumtradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.tradeType[] | ListEnumtradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.tradeType[] | ListEnumtradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtradeTypeWithAggregatesFilter<$PrismaModel> | $Enums.tradeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtradeTypeFilter<$PrismaModel>
    _max?: NestedEnumtradeTypeFilter<$PrismaModel>
  }

  export type NestedEnumorderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orderStatus | EnumorderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumorderStatusWithAggregatesFilter<$PrismaModel> | $Enums.orderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorderStatusFilter<$PrismaModel>
    _max?: NestedEnumorderStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type tradesCreateWithoutUserInput = {
    id?: string
    margin: number
    marginDecPos?: number
    asset: string
    type: $Enums.tradeType
    leverage: number
    openPrice: number
    openPriceDecPos?: number
    orderStatus?: $Enums.orderStatus
    closePrice?: number | null
    closePriceDecPos?: number | null
    pnl?: number | null
    pnlDecPos?: number | null
    createdAt?: Date | string
    stopLoss?: number | null
    stopLossDecPos?: number | null
    takeProfit?: number | null
    takeProfitDecPos?: number | null
  }

  export type tradesUncheckedCreateWithoutUserInput = {
    id?: string
    margin: number
    marginDecPos?: number
    asset: string
    type: $Enums.tradeType
    leverage: number
    openPrice: number
    openPriceDecPos?: number
    orderStatus?: $Enums.orderStatus
    closePrice?: number | null
    closePriceDecPos?: number | null
    pnl?: number | null
    pnlDecPos?: number | null
    createdAt?: Date | string
    stopLoss?: number | null
    stopLossDecPos?: number | null
    takeProfit?: number | null
    takeProfitDecPos?: number | null
  }

  export type tradesCreateOrConnectWithoutUserInput = {
    where: tradesWhereUniqueInput
    create: XOR<tradesCreateWithoutUserInput, tradesUncheckedCreateWithoutUserInput>
  }

  export type tradesCreateManyUserInputEnvelope = {
    data: tradesCreateManyUserInput | tradesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type tradesUpsertWithWhereUniqueWithoutUserInput = {
    where: tradesWhereUniqueInput
    update: XOR<tradesUpdateWithoutUserInput, tradesUncheckedUpdateWithoutUserInput>
    create: XOR<tradesCreateWithoutUserInput, tradesUncheckedCreateWithoutUserInput>
  }

  export type tradesUpdateWithWhereUniqueWithoutUserInput = {
    where: tradesWhereUniqueInput
    data: XOR<tradesUpdateWithoutUserInput, tradesUncheckedUpdateWithoutUserInput>
  }

  export type tradesUpdateManyWithWhereWithoutUserInput = {
    where: tradesScalarWhereInput
    data: XOR<tradesUpdateManyMutationInput, tradesUncheckedUpdateManyWithoutUserInput>
  }

  export type tradesScalarWhereInput = {
    AND?: tradesScalarWhereInput | tradesScalarWhereInput[]
    OR?: tradesScalarWhereInput[]
    NOT?: tradesScalarWhereInput | tradesScalarWhereInput[]
    id?: StringFilter<"trades"> | string
    margin?: IntFilter<"trades"> | number
    marginDecPos?: IntFilter<"trades"> | number
    asset?: StringFilter<"trades"> | string
    type?: EnumtradeTypeFilter<"trades"> | $Enums.tradeType
    leverage?: IntFilter<"trades"> | number
    openPrice?: IntFilter<"trades"> | number
    openPriceDecPos?: IntFilter<"trades"> | number
    orderStatus?: EnumorderStatusFilter<"trades"> | $Enums.orderStatus
    closePrice?: IntNullableFilter<"trades"> | number | null
    closePriceDecPos?: IntNullableFilter<"trades"> | number | null
    pnl?: IntNullableFilter<"trades"> | number | null
    pnlDecPos?: IntNullableFilter<"trades"> | number | null
    createdAt?: DateTimeFilter<"trades"> | Date | string
    stopLoss?: IntNullableFilter<"trades"> | number | null
    stopLossDecPos?: IntNullableFilter<"trades"> | number | null
    takeProfit?: IntNullableFilter<"trades"> | number | null
    takeProfitDecPos?: IntNullableFilter<"trades"> | number | null
    userId?: StringFilter<"trades"> | string
  }

  export type usersCreateWithoutTradesInput = {
    id?: string
    email: string
    password: string
    balance?: number
    balDecPos?: number
  }

  export type usersUncheckedCreateWithoutTradesInput = {
    id?: string
    email: string
    password: string
    balance?: number
    balDecPos?: number
  }

  export type usersCreateOrConnectWithoutTradesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTradesInput, usersUncheckedCreateWithoutTradesInput>
  }

  export type usersUpsertWithoutTradesInput = {
    update: XOR<usersUpdateWithoutTradesInput, usersUncheckedUpdateWithoutTradesInput>
    create: XOR<usersCreateWithoutTradesInput, usersUncheckedCreateWithoutTradesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTradesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTradesInput, usersUncheckedUpdateWithoutTradesInput>
  }

  export type usersUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    balDecPos?: IntFieldUpdateOperationsInput | number
  }

  export type usersUncheckedUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    balDecPos?: IntFieldUpdateOperationsInput | number
  }

  export type tradesCreateManyUserInput = {
    id?: string
    margin: number
    marginDecPos?: number
    asset: string
    type: $Enums.tradeType
    leverage: number
    openPrice: number
    openPriceDecPos?: number
    orderStatus?: $Enums.orderStatus
    closePrice?: number | null
    closePriceDecPos?: number | null
    pnl?: number | null
    pnlDecPos?: number | null
    createdAt?: Date | string
    stopLoss?: number | null
    stopLossDecPos?: number | null
    takeProfit?: number | null
    takeProfitDecPos?: number | null
  }

  export type tradesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    marginDecPos?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    type?: EnumtradeTypeFieldUpdateOperationsInput | $Enums.tradeType
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    openPriceDecPos?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    closePrice?: NullableIntFieldUpdateOperationsInput | number | null
    closePriceDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: NullableIntFieldUpdateOperationsInput | number | null
    pnlDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    stopLossDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfitDecPos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tradesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    marginDecPos?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    type?: EnumtradeTypeFieldUpdateOperationsInput | $Enums.tradeType
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    openPriceDecPos?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    closePrice?: NullableIntFieldUpdateOperationsInput | number | null
    closePriceDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: NullableIntFieldUpdateOperationsInput | number | null
    pnlDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    stopLossDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfitDecPos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tradesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    marginDecPos?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    type?: EnumtradeTypeFieldUpdateOperationsInput | $Enums.tradeType
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    openPriceDecPos?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    closePrice?: NullableIntFieldUpdateOperationsInput | number | null
    closePriceDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: NullableIntFieldUpdateOperationsInput | number | null
    pnlDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    stopLossDecPos?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    takeProfitDecPos?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}