
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CourseProduct
 * 
 */
export type CourseProduct = $Result.DefaultSelection<Prisma.$CourseProductPayload>
/**
 * Model CourseSection
 * 
 */
export type CourseSection = $Result.DefaultSelection<Prisma.$CourseSectionPayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model UserCourseAccess
 * 
 */
export type UserCourseAccess = $Result.DefaultSelection<Prisma.$UserCourseAccessPayload>
/**
 * Model UserLessonComplete
 * 
 */
export type UserLessonComplete = $Result.DefaultSelection<Prisma.$UserLessonCompletePayload>
/**
 * Model CompletedLesson
 * 
 */
export type CompletedLesson = $Result.DefaultSelection<Prisma.$CompletedLessonPayload>
/**
 * Model ReferralCommission
 * 
 */
export type ReferralCommission = $Result.DefaultSelection<Prisma.$ReferralCommissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_role: {
  user: 'user',
  admin: 'admin',
  student: 'student'
};

export type user_role = (typeof user_role)[keyof typeof user_role]


export const course_section_status: {
  public: 'public',
  private: 'private'
};

export type course_section_status = (typeof course_section_status)[keyof typeof course_section_status]


export const lesson_status: {
  public: 'public',
  private: 'private',
  preview: 'preview'
};

export type lesson_status = (typeof lesson_status)[keyof typeof lesson_status]


export const product_status: {
  public: 'public',
  private: 'private'
};

export type product_status = (typeof product_status)[keyof typeof product_status]


export const ReferralCommissionStatus: {
  pending: 'pending',
  paid: 'paid'
};

export type ReferralCommissionStatus = (typeof ReferralCommissionStatus)[keyof typeof ReferralCommissionStatus]

}

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

export type course_section_status = $Enums.course_section_status

export const course_section_status: typeof $Enums.course_section_status

export type lesson_status = $Enums.lesson_status

export const lesson_status: typeof $Enums.lesson_status

export type product_status = $Enums.product_status

export const product_status: typeof $Enums.product_status

export type ReferralCommissionStatus = $Enums.ReferralCommissionStatus

export const ReferralCommissionStatus: typeof $Enums.ReferralCommissionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseProduct`: Exposes CRUD operations for the **CourseProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseProducts
    * const courseProducts = await prisma.courseProduct.findMany()
    * ```
    */
  get courseProduct(): Prisma.CourseProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseSection`: Exposes CRUD operations for the **CourseSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseSections
    * const courseSections = await prisma.courseSection.findMany()
    * ```
    */
  get courseSection(): Prisma.CourseSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCourseAccess`: Exposes CRUD operations for the **UserCourseAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCourseAccesses
    * const userCourseAccesses = await prisma.userCourseAccess.findMany()
    * ```
    */
  get userCourseAccess(): Prisma.UserCourseAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLessonComplete`: Exposes CRUD operations for the **UserLessonComplete** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLessonCompletes
    * const userLessonCompletes = await prisma.userLessonComplete.findMany()
    * ```
    */
  get userLessonComplete(): Prisma.UserLessonCompleteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completedLesson`: Exposes CRUD operations for the **CompletedLesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedLessons
    * const completedLessons = await prisma.completedLesson.findMany()
    * ```
    */
  get completedLesson(): Prisma.CompletedLessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referralCommission`: Exposes CRUD operations for the **ReferralCommission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferralCommissions
    * const referralCommissions = await prisma.referralCommission.findMany()
    * ```
    */
  get referralCommission(): Prisma.ReferralCommissionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Course: 'Course',
    CourseProduct: 'CourseProduct',
    CourseSection: 'CourseSection',
    Lesson: 'Lesson',
    Product: 'Product',
    Purchase: 'Purchase',
    UserCourseAccess: 'UserCourseAccess',
    UserLessonComplete: 'UserLessonComplete',
    CompletedLesson: 'CompletedLesson',
    ReferralCommission: 'ReferralCommission'
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
      modelProps: "user" | "session" | "account" | "verification" | "course" | "courseProduct" | "courseSection" | "lesson" | "product" | "purchase" | "userCourseAccess" | "userLessonComplete" | "completedLesson" | "referralCommission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CourseProduct: {
        payload: Prisma.$CourseProductPayload<ExtArgs>
        fields: Prisma.CourseProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProductPayload>
          }
          findFirst: {
            args: Prisma.CourseProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProductPayload>
          }
          findMany: {
            args: Prisma.CourseProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProductPayload>[]
          }
          create: {
            args: Prisma.CourseProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProductPayload>
          }
          createMany: {
            args: Prisma.CourseProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProductPayload>[]
          }
          delete: {
            args: Prisma.CourseProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProductPayload>
          }
          update: {
            args: Prisma.CourseProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProductPayload>
          }
          deleteMany: {
            args: Prisma.CourseProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProductPayload>[]
          }
          upsert: {
            args: Prisma.CourseProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProductPayload>
          }
          aggregate: {
            args: Prisma.CourseProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseProduct>
          }
          groupBy: {
            args: Prisma.CourseProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseProductCountArgs<ExtArgs>
            result: $Utils.Optional<CourseProductCountAggregateOutputType> | number
          }
        }
      }
      CourseSection: {
        payload: Prisma.$CourseSectionPayload<ExtArgs>
        fields: Prisma.CourseSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSectionPayload>
          }
          findFirst: {
            args: Prisma.CourseSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSectionPayload>
          }
          findMany: {
            args: Prisma.CourseSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSectionPayload>[]
          }
          create: {
            args: Prisma.CourseSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSectionPayload>
          }
          createMany: {
            args: Prisma.CourseSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSectionPayload>[]
          }
          delete: {
            args: Prisma.CourseSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSectionPayload>
          }
          update: {
            args: Prisma.CourseSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSectionPayload>
          }
          deleteMany: {
            args: Prisma.CourseSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSectionPayload>[]
          }
          upsert: {
            args: Prisma.CourseSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSectionPayload>
          }
          aggregate: {
            args: Prisma.CourseSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseSection>
          }
          groupBy: {
            args: Prisma.CourseSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseSectionCountArgs<ExtArgs>
            result: $Utils.Optional<CourseSectionCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      UserCourseAccess: {
        payload: Prisma.$UserCourseAccessPayload<ExtArgs>
        fields: Prisma.UserCourseAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCourseAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCourseAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseAccessPayload>
          }
          findFirst: {
            args: Prisma.UserCourseAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCourseAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseAccessPayload>
          }
          findMany: {
            args: Prisma.UserCourseAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseAccessPayload>[]
          }
          create: {
            args: Prisma.UserCourseAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseAccessPayload>
          }
          createMany: {
            args: Prisma.UserCourseAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCourseAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseAccessPayload>[]
          }
          delete: {
            args: Prisma.UserCourseAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseAccessPayload>
          }
          update: {
            args: Prisma.UserCourseAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseAccessPayload>
          }
          deleteMany: {
            args: Prisma.UserCourseAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCourseAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCourseAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseAccessPayload>[]
          }
          upsert: {
            args: Prisma.UserCourseAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseAccessPayload>
          }
          aggregate: {
            args: Prisma.UserCourseAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCourseAccess>
          }
          groupBy: {
            args: Prisma.UserCourseAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCourseAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCourseAccessCountArgs<ExtArgs>
            result: $Utils.Optional<UserCourseAccessCountAggregateOutputType> | number
          }
        }
      }
      UserLessonComplete: {
        payload: Prisma.$UserLessonCompletePayload<ExtArgs>
        fields: Prisma.UserLessonCompleteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLessonCompleteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonCompletePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLessonCompleteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonCompletePayload>
          }
          findFirst: {
            args: Prisma.UserLessonCompleteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonCompletePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLessonCompleteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonCompletePayload>
          }
          findMany: {
            args: Prisma.UserLessonCompleteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonCompletePayload>[]
          }
          create: {
            args: Prisma.UserLessonCompleteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonCompletePayload>
          }
          createMany: {
            args: Prisma.UserLessonCompleteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLessonCompleteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonCompletePayload>[]
          }
          delete: {
            args: Prisma.UserLessonCompleteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonCompletePayload>
          }
          update: {
            args: Prisma.UserLessonCompleteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonCompletePayload>
          }
          deleteMany: {
            args: Prisma.UserLessonCompleteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLessonCompleteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLessonCompleteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonCompletePayload>[]
          }
          upsert: {
            args: Prisma.UserLessonCompleteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonCompletePayload>
          }
          aggregate: {
            args: Prisma.UserLessonCompleteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLessonComplete>
          }
          groupBy: {
            args: Prisma.UserLessonCompleteGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLessonCompleteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLessonCompleteCountArgs<ExtArgs>
            result: $Utils.Optional<UserLessonCompleteCountAggregateOutputType> | number
          }
        }
      }
      CompletedLesson: {
        payload: Prisma.$CompletedLessonPayload<ExtArgs>
        fields: Prisma.CompletedLessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedLessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedLessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedLessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedLessonPayload>
          }
          findFirst: {
            args: Prisma.CompletedLessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedLessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedLessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedLessonPayload>
          }
          findMany: {
            args: Prisma.CompletedLessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedLessonPayload>[]
          }
          create: {
            args: Prisma.CompletedLessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedLessonPayload>
          }
          createMany: {
            args: Prisma.CompletedLessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedLessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedLessonPayload>[]
          }
          delete: {
            args: Prisma.CompletedLessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedLessonPayload>
          }
          update: {
            args: Prisma.CompletedLessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedLessonPayload>
          }
          deleteMany: {
            args: Prisma.CompletedLessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedLessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompletedLessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedLessonPayload>[]
          }
          upsert: {
            args: Prisma.CompletedLessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedLessonPayload>
          }
          aggregate: {
            args: Prisma.CompletedLessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedLesson>
          }
          groupBy: {
            args: Prisma.CompletedLessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedLessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedLessonCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedLessonCountAggregateOutputType> | number
          }
        }
      }
      ReferralCommission: {
        payload: Prisma.$ReferralCommissionPayload<ExtArgs>
        fields: Prisma.ReferralCommissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralCommissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCommissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralCommissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCommissionPayload>
          }
          findFirst: {
            args: Prisma.ReferralCommissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCommissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralCommissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCommissionPayload>
          }
          findMany: {
            args: Prisma.ReferralCommissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCommissionPayload>[]
          }
          create: {
            args: Prisma.ReferralCommissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCommissionPayload>
          }
          createMany: {
            args: Prisma.ReferralCommissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralCommissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCommissionPayload>[]
          }
          delete: {
            args: Prisma.ReferralCommissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCommissionPayload>
          }
          update: {
            args: Prisma.ReferralCommissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCommissionPayload>
          }
          deleteMany: {
            args: Prisma.ReferralCommissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralCommissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferralCommissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCommissionPayload>[]
          }
          upsert: {
            args: Prisma.ReferralCommissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCommissionPayload>
          }
          aggregate: {
            args: Prisma.ReferralCommissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferralCommission>
          }
          groupBy: {
            args: Prisma.ReferralCommissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralCommissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralCommissionCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCommissionCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    course?: CourseOmit
    courseProduct?: CourseProductOmit
    courseSection?: CourseSectionOmit
    lesson?: LessonOmit
    product?: ProductOmit
    purchase?: PurchaseOmit
    userCourseAccess?: UserCourseAccessOmit
    userLessonComplete?: UserLessonCompleteOmit
    completedLesson?: CompletedLessonOmit
    referralCommission?: ReferralCommissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Session: number
    Account: number
    Purchase: number
    UserCourseAccess: number
    UserLessonComplete: number
    CompletedLesson: number
    referrals: number
    commissionsGiven: number
    commissionsEarned: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Session?: boolean | UserCountOutputTypeCountSessionArgs
    Account?: boolean | UserCountOutputTypeCountAccountArgs
    Purchase?: boolean | UserCountOutputTypeCountPurchaseArgs
    UserCourseAccess?: boolean | UserCountOutputTypeCountUserCourseAccessArgs
    UserLessonComplete?: boolean | UserCountOutputTypeCountUserLessonCompleteArgs
    CompletedLesson?: boolean | UserCountOutputTypeCountCompletedLessonArgs
    referrals?: boolean | UserCountOutputTypeCountReferralsArgs
    commissionsGiven?: boolean | UserCountOutputTypeCountCommissionsGivenArgs
    commissionsEarned?: boolean | UserCountOutputTypeCountCommissionsEarnedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserCourseAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseAccessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserLessonCompleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLessonCompleteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompletedLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedLessonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommissionsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralCommissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommissionsEarnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralCommissionWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    courseProducts: number
    userCourseAccess: number
    courseSections: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseProducts?: boolean | CourseCountOutputTypeCountCourseProductsArgs
    userCourseAccess?: boolean | CourseCountOutputTypeCountUserCourseAccessArgs
    courseSections?: boolean | CourseCountOutputTypeCountCourseSectionsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseProductWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountUserCourseAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseAccessWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseSectionWhereInput
  }


  /**
   * Count Type CourseSectionCountOutputType
   */

  export type CourseSectionCountOutputType = {
    lessons: number
  }

  export type CourseSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | CourseSectionCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * CourseSectionCountOutputType without action
   */
  export type CourseSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSectionCountOutputType
     */
    select?: CourseSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseSectionCountOutputType without action
   */
  export type CourseSectionCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    userLessonsComplete: number
    CompletedLesson: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLessonsComplete?: boolean | LessonCountOutputTypeCountUserLessonsCompleteArgs
    CompletedLesson?: boolean | LessonCountOutputTypeCountCompletedLessonArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountUserLessonsCompleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLessonCompleteWhereInput
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountCompletedLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedLessonWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    courseProducts: number
    purchases: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseProducts?: boolean | ProductCountOutputTypeCountCourseProductsArgs
    purchases?: boolean | ProductCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCourseProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseProductWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    twoFactorEnabled: boolean | null
    role: $Enums.user_role | null
    referralCode: string | null
    referredById: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    twoFactorEnabled: boolean | null
    role: $Enums.user_role | null
    referralCode: string | null
    referredById: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    twoFactorEnabled: number
    role: number
    referralCode: number
    referredById: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    twoFactorEnabled?: true
    role?: true
    referralCode?: true
    referredById?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    twoFactorEnabled?: true
    role?: true
    referralCode?: true
    referredById?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    twoFactorEnabled?: true
    role?: true
    referralCode?: true
    referredById?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    twoFactorEnabled: boolean
    role: $Enums.user_role
    referralCode: string | null
    referredById: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    twoFactorEnabled?: boolean
    role?: boolean
    referralCode?: boolean
    referredById?: boolean
    Session?: boolean | User$SessionArgs<ExtArgs>
    Account?: boolean | User$AccountArgs<ExtArgs>
    Purchase?: boolean | User$PurchaseArgs<ExtArgs>
    UserCourseAccess?: boolean | User$UserCourseAccessArgs<ExtArgs>
    UserLessonComplete?: boolean | User$UserLessonCompleteArgs<ExtArgs>
    CompletedLesson?: boolean | User$CompletedLessonArgs<ExtArgs>
    referredBy?: boolean | User$referredByArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    commissionsGiven?: boolean | User$commissionsGivenArgs<ExtArgs>
    commissionsEarned?: boolean | User$commissionsEarnedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    twoFactorEnabled?: boolean
    role?: boolean
    referralCode?: boolean
    referredById?: boolean
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    twoFactorEnabled?: boolean
    role?: boolean
    referralCode?: boolean
    referredById?: boolean
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    twoFactorEnabled?: boolean
    role?: boolean
    referralCode?: boolean
    referredById?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "twoFactorEnabled" | "role" | "referralCode" | "referredById", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Session?: boolean | User$SessionArgs<ExtArgs>
    Account?: boolean | User$AccountArgs<ExtArgs>
    Purchase?: boolean | User$PurchaseArgs<ExtArgs>
    UserCourseAccess?: boolean | User$UserCourseAccessArgs<ExtArgs>
    UserLessonComplete?: boolean | User$UserLessonCompleteArgs<ExtArgs>
    CompletedLesson?: boolean | User$CompletedLessonArgs<ExtArgs>
    referredBy?: boolean | User$referredByArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    commissionsGiven?: boolean | User$commissionsGivenArgs<ExtArgs>
    commissionsEarned?: boolean | User$commissionsEarnedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Session: Prisma.$SessionPayload<ExtArgs>[]
      Account: Prisma.$AccountPayload<ExtArgs>[]
      Purchase: Prisma.$PurchasePayload<ExtArgs>[]
      UserCourseAccess: Prisma.$UserCourseAccessPayload<ExtArgs>[]
      UserLessonComplete: Prisma.$UserLessonCompletePayload<ExtArgs>[]
      CompletedLesson: Prisma.$CompletedLessonPayload<ExtArgs>[]
      referredBy: Prisma.$UserPayload<ExtArgs> | null
      referrals: Prisma.$UserPayload<ExtArgs>[]
      commissionsGiven: Prisma.$ReferralCommissionPayload<ExtArgs>[]
      commissionsEarned: Prisma.$ReferralCommissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
      twoFactorEnabled: boolean
      role: $Enums.user_role
      referralCode: string | null
      referredById: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Session<T extends User$SessionArgs<ExtArgs> = {}>(args?: Subset<T, User$SessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Account<T extends User$AccountArgs<ExtArgs> = {}>(args?: Subset<T, User$AccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Purchase<T extends User$PurchaseArgs<ExtArgs> = {}>(args?: Subset<T, User$PurchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserCourseAccess<T extends User$UserCourseAccessArgs<ExtArgs> = {}>(args?: Subset<T, User$UserCourseAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserLessonComplete<T extends User$UserLessonCompleteArgs<ExtArgs> = {}>(args?: Subset<T, User$UserLessonCompleteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLessonCompletePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CompletedLesson<T extends User$CompletedLessonArgs<ExtArgs> = {}>(args?: Subset<T, User$CompletedLessonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedLessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referredBy<T extends User$referredByArgs<ExtArgs> = {}>(args?: Subset<T, User$referredByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    referrals<T extends User$referralsArgs<ExtArgs> = {}>(args?: Subset<T, User$referralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commissionsGiven<T extends User$commissionsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$commissionsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralCommissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commissionsEarned<T extends User$commissionsEarnedArgs<ExtArgs> = {}>(args?: Subset<T, User$commissionsEarnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralCommissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly twoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'user_role'>
    readonly referralCode: FieldRef<"User", 'String'>
    readonly referredById: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Session
   */
  export type User$SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.Account
   */
  export type User$AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.Purchase
   */
  export type User$PurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * User.UserCourseAccess
   */
  export type User$UserCourseAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessInclude<ExtArgs> | null
    where?: UserCourseAccessWhereInput
    orderBy?: UserCourseAccessOrderByWithRelationInput | UserCourseAccessOrderByWithRelationInput[]
    cursor?: UserCourseAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseAccessScalarFieldEnum | UserCourseAccessScalarFieldEnum[]
  }

  /**
   * User.UserLessonComplete
   */
  export type User$UserLessonCompleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteInclude<ExtArgs> | null
    where?: UserLessonCompleteWhereInput
    orderBy?: UserLessonCompleteOrderByWithRelationInput | UserLessonCompleteOrderByWithRelationInput[]
    cursor?: UserLessonCompleteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLessonCompleteScalarFieldEnum | UserLessonCompleteScalarFieldEnum[]
  }

  /**
   * User.CompletedLesson
   */
  export type User$CompletedLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonInclude<ExtArgs> | null
    where?: CompletedLessonWhereInput
    orderBy?: CompletedLessonOrderByWithRelationInput | CompletedLessonOrderByWithRelationInput[]
    cursor?: CompletedLessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedLessonScalarFieldEnum | CompletedLessonScalarFieldEnum[]
  }

  /**
   * User.referredBy
   */
  export type User$referredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.referrals
   */
  export type User$referralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.commissionsGiven
   */
  export type User$commissionsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionInclude<ExtArgs> | null
    where?: ReferralCommissionWhereInput
    orderBy?: ReferralCommissionOrderByWithRelationInput | ReferralCommissionOrderByWithRelationInput[]
    cursor?: ReferralCommissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralCommissionScalarFieldEnum | ReferralCommissionScalarFieldEnum[]
  }

  /**
   * User.commissionsEarned
   */
  export type User$commissionsEarnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionInclude<ExtArgs> | null
    where?: ReferralCommissionWhereInput
    orderBy?: ReferralCommissionOrderByWithRelationInput | ReferralCommissionOrderByWithRelationInput[]
    cursor?: ReferralCommissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralCommissionScalarFieldEnum | ReferralCommissionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    ipAddress: number
    userAgent: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    ipAddress: string | null
    userAgent: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "ipAddress" | "userAgent" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      ipAddress: string | null
      userAgent: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    expiresAt: Date | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    expiresAt: Date | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    expiresAt: number
    password: number
    createdAt: number
    updatedAt: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    expiresAt?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    expiresAt?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    expiresAt?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    expiresAt: Date | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    expiresAt?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    expiresAt?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    expiresAt?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    expiresAt?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "expiresAt" | "password" | "createdAt" | "updatedAt" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      expiresAt: Date | null
      password: string | null
      createdAt: Date
      updatedAt: Date
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly expiresAt: FieldRef<"Account", 'DateTime'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    notionDoc: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    notionDoc: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    notionDoc: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    notionDoc?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    notionDoc?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    notionDoc?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    notionDoc: string | null
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notionDoc?: boolean
    courseProducts?: boolean | Course$courseProductsArgs<ExtArgs>
    userCourseAccess?: boolean | Course$userCourseAccessArgs<ExtArgs>
    courseSections?: boolean | Course$courseSectionsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notionDoc?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notionDoc?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notionDoc?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "notionDoc", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseProducts?: boolean | Course$courseProductsArgs<ExtArgs>
    userCourseAccess?: boolean | Course$userCourseAccessArgs<ExtArgs>
    courseSections?: boolean | Course$courseSectionsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      courseProducts: Prisma.$CourseProductPayload<ExtArgs>[]
      userCourseAccess: Prisma.$UserCourseAccessPayload<ExtArgs>[]
      courseSections: Prisma.$CourseSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
      notionDoc: string | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseProducts<T extends Course$courseProductsArgs<ExtArgs> = {}>(args?: Subset<T, Course$courseProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userCourseAccess<T extends Course$userCourseAccessArgs<ExtArgs> = {}>(args?: Subset<T, Course$userCourseAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseSections<T extends Course$courseSectionsArgs<ExtArgs> = {}>(args?: Subset<T, Course$courseSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
    readonly notionDoc: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.courseProducts
   */
  export type Course$courseProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductInclude<ExtArgs> | null
    where?: CourseProductWhereInput
    orderBy?: CourseProductOrderByWithRelationInput | CourseProductOrderByWithRelationInput[]
    cursor?: CourseProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseProductScalarFieldEnum | CourseProductScalarFieldEnum[]
  }

  /**
   * Course.userCourseAccess
   */
  export type Course$userCourseAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessInclude<ExtArgs> | null
    where?: UserCourseAccessWhereInput
    orderBy?: UserCourseAccessOrderByWithRelationInput | UserCourseAccessOrderByWithRelationInput[]
    cursor?: UserCourseAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseAccessScalarFieldEnum | UserCourseAccessScalarFieldEnum[]
  }

  /**
   * Course.courseSections
   */
  export type Course$courseSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSection
     */
    select?: CourseSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSection
     */
    omit?: CourseSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSectionInclude<ExtArgs> | null
    where?: CourseSectionWhereInput
    orderBy?: CourseSectionOrderByWithRelationInput | CourseSectionOrderByWithRelationInput[]
    cursor?: CourseSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseSectionScalarFieldEnum | CourseSectionScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CourseProduct
   */

  export type AggregateCourseProduct = {
    _count: CourseProductCountAggregateOutputType | null
    _min: CourseProductMinAggregateOutputType | null
    _max: CourseProductMaxAggregateOutputType | null
  }

  export type CourseProductMinAggregateOutputType = {
    courseId: string | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseProductMaxAggregateOutputType = {
    courseId: string | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseProductCountAggregateOutputType = {
    courseId: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseProductMinAggregateInputType = {
    courseId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseProductMaxAggregateInputType = {
    courseId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseProductCountAggregateInputType = {
    courseId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseProduct to aggregate.
     */
    where?: CourseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProducts to fetch.
     */
    orderBy?: CourseProductOrderByWithRelationInput | CourseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseProducts
    **/
    _count?: true | CourseProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseProductMaxAggregateInputType
  }

  export type GetCourseProductAggregateType<T extends CourseProductAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseProduct[P]>
      : GetScalarType<T[P], AggregateCourseProduct[P]>
  }




  export type CourseProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseProductWhereInput
    orderBy?: CourseProductOrderByWithAggregationInput | CourseProductOrderByWithAggregationInput[]
    by: CourseProductScalarFieldEnum[] | CourseProductScalarFieldEnum
    having?: CourseProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseProductCountAggregateInputType | true
    _min?: CourseProductMinAggregateInputType
    _max?: CourseProductMaxAggregateInputType
  }

  export type CourseProductGroupByOutputType = {
    courseId: string
    productId: string
    createdAt: Date
    updatedAt: Date
    _count: CourseProductCountAggregateOutputType | null
    _min: CourseProductMinAggregateOutputType | null
    _max: CourseProductMaxAggregateOutputType | null
  }

  type GetCourseProductGroupByPayload<T extends CourseProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseProductGroupByOutputType[P]>
            : GetScalarType<T[P], CourseProductGroupByOutputType[P]>
        }
      >
    >


  export type CourseProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseProduct"]>

  export type CourseProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseProduct"]>

  export type CourseProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseProduct"]>

  export type CourseProductSelectScalar = {
    courseId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"courseId" | "productId" | "createdAt" | "updatedAt", ExtArgs["result"]["courseProduct"]>
  export type CourseProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type CourseProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type CourseProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $CourseProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseProduct"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      courseId: string
      productId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseProduct"]>
    composites: {}
  }

  type CourseProductGetPayload<S extends boolean | null | undefined | CourseProductDefaultArgs> = $Result.GetResult<Prisma.$CourseProductPayload, S>

  type CourseProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseProductCountAggregateInputType | true
    }

  export interface CourseProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseProduct'], meta: { name: 'CourseProduct' } }
    /**
     * Find zero or one CourseProduct that matches the filter.
     * @param {CourseProductFindUniqueArgs} args - Arguments to find a CourseProduct
     * @example
     * // Get one CourseProduct
     * const courseProduct = await prisma.courseProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseProductFindUniqueArgs>(args: SelectSubset<T, CourseProductFindUniqueArgs<ExtArgs>>): Prisma__CourseProductClient<$Result.GetResult<Prisma.$CourseProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseProductFindUniqueOrThrowArgs} args - Arguments to find a CourseProduct
     * @example
     * // Get one CourseProduct
     * const courseProduct = await prisma.courseProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseProductFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseProductClient<$Result.GetResult<Prisma.$CourseProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProductFindFirstArgs} args - Arguments to find a CourseProduct
     * @example
     * // Get one CourseProduct
     * const courseProduct = await prisma.courseProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseProductFindFirstArgs>(args?: SelectSubset<T, CourseProductFindFirstArgs<ExtArgs>>): Prisma__CourseProductClient<$Result.GetResult<Prisma.$CourseProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProductFindFirstOrThrowArgs} args - Arguments to find a CourseProduct
     * @example
     * // Get one CourseProduct
     * const courseProduct = await prisma.courseProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseProductFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseProductClient<$Result.GetResult<Prisma.$CourseProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseProducts
     * const courseProducts = await prisma.courseProduct.findMany()
     * 
     * // Get first 10 CourseProducts
     * const courseProducts = await prisma.courseProduct.findMany({ take: 10 })
     * 
     * // Only select the `courseId`
     * const courseProductWithCourseIdOnly = await prisma.courseProduct.findMany({ select: { courseId: true } })
     * 
     */
    findMany<T extends CourseProductFindManyArgs>(args?: SelectSubset<T, CourseProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseProduct.
     * @param {CourseProductCreateArgs} args - Arguments to create a CourseProduct.
     * @example
     * // Create one CourseProduct
     * const CourseProduct = await prisma.courseProduct.create({
     *   data: {
     *     // ... data to create a CourseProduct
     *   }
     * })
     * 
     */
    create<T extends CourseProductCreateArgs>(args: SelectSubset<T, CourseProductCreateArgs<ExtArgs>>): Prisma__CourseProductClient<$Result.GetResult<Prisma.$CourseProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseProducts.
     * @param {CourseProductCreateManyArgs} args - Arguments to create many CourseProducts.
     * @example
     * // Create many CourseProducts
     * const courseProduct = await prisma.courseProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseProductCreateManyArgs>(args?: SelectSubset<T, CourseProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseProducts and returns the data saved in the database.
     * @param {CourseProductCreateManyAndReturnArgs} args - Arguments to create many CourseProducts.
     * @example
     * // Create many CourseProducts
     * const courseProduct = await prisma.courseProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseProducts and only return the `courseId`
     * const courseProductWithCourseIdOnly = await prisma.courseProduct.createManyAndReturn({
     *   select: { courseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseProductCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseProduct.
     * @param {CourseProductDeleteArgs} args - Arguments to delete one CourseProduct.
     * @example
     * // Delete one CourseProduct
     * const CourseProduct = await prisma.courseProduct.delete({
     *   where: {
     *     // ... filter to delete one CourseProduct
     *   }
     * })
     * 
     */
    delete<T extends CourseProductDeleteArgs>(args: SelectSubset<T, CourseProductDeleteArgs<ExtArgs>>): Prisma__CourseProductClient<$Result.GetResult<Prisma.$CourseProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseProduct.
     * @param {CourseProductUpdateArgs} args - Arguments to update one CourseProduct.
     * @example
     * // Update one CourseProduct
     * const courseProduct = await prisma.courseProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseProductUpdateArgs>(args: SelectSubset<T, CourseProductUpdateArgs<ExtArgs>>): Prisma__CourseProductClient<$Result.GetResult<Prisma.$CourseProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseProducts.
     * @param {CourseProductDeleteManyArgs} args - Arguments to filter CourseProducts to delete.
     * @example
     * // Delete a few CourseProducts
     * const { count } = await prisma.courseProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseProductDeleteManyArgs>(args?: SelectSubset<T, CourseProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseProducts
     * const courseProduct = await prisma.courseProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseProductUpdateManyArgs>(args: SelectSubset<T, CourseProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseProducts and returns the data updated in the database.
     * @param {CourseProductUpdateManyAndReturnArgs} args - Arguments to update many CourseProducts.
     * @example
     * // Update many CourseProducts
     * const courseProduct = await prisma.courseProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseProducts and only return the `courseId`
     * const courseProductWithCourseIdOnly = await prisma.courseProduct.updateManyAndReturn({
     *   select: { courseId: true },
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
    updateManyAndReturn<T extends CourseProductUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseProduct.
     * @param {CourseProductUpsertArgs} args - Arguments to update or create a CourseProduct.
     * @example
     * // Update or create a CourseProduct
     * const courseProduct = await prisma.courseProduct.upsert({
     *   create: {
     *     // ... data to create a CourseProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseProduct we want to update
     *   }
     * })
     */
    upsert<T extends CourseProductUpsertArgs>(args: SelectSubset<T, CourseProductUpsertArgs<ExtArgs>>): Prisma__CourseProductClient<$Result.GetResult<Prisma.$CourseProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProductCountArgs} args - Arguments to filter CourseProducts to count.
     * @example
     * // Count the number of CourseProducts
     * const count = await prisma.courseProduct.count({
     *   where: {
     *     // ... the filter for the CourseProducts we want to count
     *   }
     * })
    **/
    count<T extends CourseProductCountArgs>(
      args?: Subset<T, CourseProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseProductAggregateArgs>(args: Subset<T, CourseProductAggregateArgs>): Prisma.PrismaPromise<GetCourseProductAggregateType<T>>

    /**
     * Group by CourseProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProductGroupByArgs} args - Group by arguments.
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
      T extends CourseProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseProductGroupByArgs['orderBy'] }
        : { orderBy?: CourseProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseProduct model
   */
  readonly fields: CourseProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CourseProduct model
   */
  interface CourseProductFieldRefs {
    readonly courseId: FieldRef<"CourseProduct", 'String'>
    readonly productId: FieldRef<"CourseProduct", 'String'>
    readonly createdAt: FieldRef<"CourseProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseProduct findUnique
   */
  export type CourseProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductInclude<ExtArgs> | null
    /**
     * Filter, which CourseProduct to fetch.
     */
    where: CourseProductWhereUniqueInput
  }

  /**
   * CourseProduct findUniqueOrThrow
   */
  export type CourseProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductInclude<ExtArgs> | null
    /**
     * Filter, which CourseProduct to fetch.
     */
    where: CourseProductWhereUniqueInput
  }

  /**
   * CourseProduct findFirst
   */
  export type CourseProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductInclude<ExtArgs> | null
    /**
     * Filter, which CourseProduct to fetch.
     */
    where?: CourseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProducts to fetch.
     */
    orderBy?: CourseProductOrderByWithRelationInput | CourseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseProducts.
     */
    cursor?: CourseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseProducts.
     */
    distinct?: CourseProductScalarFieldEnum | CourseProductScalarFieldEnum[]
  }

  /**
   * CourseProduct findFirstOrThrow
   */
  export type CourseProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductInclude<ExtArgs> | null
    /**
     * Filter, which CourseProduct to fetch.
     */
    where?: CourseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProducts to fetch.
     */
    orderBy?: CourseProductOrderByWithRelationInput | CourseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseProducts.
     */
    cursor?: CourseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseProducts.
     */
    distinct?: CourseProductScalarFieldEnum | CourseProductScalarFieldEnum[]
  }

  /**
   * CourseProduct findMany
   */
  export type CourseProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductInclude<ExtArgs> | null
    /**
     * Filter, which CourseProducts to fetch.
     */
    where?: CourseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProducts to fetch.
     */
    orderBy?: CourseProductOrderByWithRelationInput | CourseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseProducts.
     */
    cursor?: CourseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProducts.
     */
    skip?: number
    distinct?: CourseProductScalarFieldEnum | CourseProductScalarFieldEnum[]
  }

  /**
   * CourseProduct create
   */
  export type CourseProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseProduct.
     */
    data: XOR<CourseProductCreateInput, CourseProductUncheckedCreateInput>
  }

  /**
   * CourseProduct createMany
   */
  export type CourseProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseProducts.
     */
    data: CourseProductCreateManyInput | CourseProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseProduct createManyAndReturn
   */
  export type CourseProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * The data used to create many CourseProducts.
     */
    data: CourseProductCreateManyInput | CourseProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseProduct update
   */
  export type CourseProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseProduct.
     */
    data: XOR<CourseProductUpdateInput, CourseProductUncheckedUpdateInput>
    /**
     * Choose, which CourseProduct to update.
     */
    where: CourseProductWhereUniqueInput
  }

  /**
   * CourseProduct updateMany
   */
  export type CourseProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseProducts.
     */
    data: XOR<CourseProductUpdateManyMutationInput, CourseProductUncheckedUpdateManyInput>
    /**
     * Filter which CourseProducts to update
     */
    where?: CourseProductWhereInput
    /**
     * Limit how many CourseProducts to update.
     */
    limit?: number
  }

  /**
   * CourseProduct updateManyAndReturn
   */
  export type CourseProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * The data used to update CourseProducts.
     */
    data: XOR<CourseProductUpdateManyMutationInput, CourseProductUncheckedUpdateManyInput>
    /**
     * Filter which CourseProducts to update
     */
    where?: CourseProductWhereInput
    /**
     * Limit how many CourseProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseProduct upsert
   */
  export type CourseProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseProduct to update in case it exists.
     */
    where: CourseProductWhereUniqueInput
    /**
     * In case the CourseProduct found by the `where` argument doesn't exist, create a new CourseProduct with this data.
     */
    create: XOR<CourseProductCreateInput, CourseProductUncheckedCreateInput>
    /**
     * In case the CourseProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseProductUpdateInput, CourseProductUncheckedUpdateInput>
  }

  /**
   * CourseProduct delete
   */
  export type CourseProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductInclude<ExtArgs> | null
    /**
     * Filter which CourseProduct to delete.
     */
    where: CourseProductWhereUniqueInput
  }

  /**
   * CourseProduct deleteMany
   */
  export type CourseProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseProducts to delete
     */
    where?: CourseProductWhereInput
    /**
     * Limit how many CourseProducts to delete.
     */
    limit?: number
  }

  /**
   * CourseProduct without action
   */
  export type CourseProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductInclude<ExtArgs> | null
  }


  /**
   * Model CourseSection
   */

  export type AggregateCourseSection = {
    _count: CourseSectionCountAggregateOutputType | null
    _avg: CourseSectionAvgAggregateOutputType | null
    _sum: CourseSectionSumAggregateOutputType | null
    _min: CourseSectionMinAggregateOutputType | null
    _max: CourseSectionMaxAggregateOutputType | null
  }

  export type CourseSectionAvgAggregateOutputType = {
    order: number | null
  }

  export type CourseSectionSumAggregateOutputType = {
    order: number | null
  }

  export type CourseSectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.course_section_status | null
    order: number | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseSectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.course_section_status | null
    order: number | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseSectionCountAggregateOutputType = {
    id: number
    name: number
    status: number
    order: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseSectionAvgAggregateInputType = {
    order?: true
  }

  export type CourseSectionSumAggregateInputType = {
    order?: true
  }

  export type CourseSectionMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    order?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseSectionMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    order?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseSectionCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    order?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseSection to aggregate.
     */
    where?: CourseSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseSections to fetch.
     */
    orderBy?: CourseSectionOrderByWithRelationInput | CourseSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseSections
    **/
    _count?: true | CourseSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseSectionMaxAggregateInputType
  }

  export type GetCourseSectionAggregateType<T extends CourseSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseSection[P]>
      : GetScalarType<T[P], AggregateCourseSection[P]>
  }




  export type CourseSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseSectionWhereInput
    orderBy?: CourseSectionOrderByWithAggregationInput | CourseSectionOrderByWithAggregationInput[]
    by: CourseSectionScalarFieldEnum[] | CourseSectionScalarFieldEnum
    having?: CourseSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseSectionCountAggregateInputType | true
    _avg?: CourseSectionAvgAggregateInputType
    _sum?: CourseSectionSumAggregateInputType
    _min?: CourseSectionMinAggregateInputType
    _max?: CourseSectionMaxAggregateInputType
  }

  export type CourseSectionGroupByOutputType = {
    id: string
    name: string
    status: $Enums.course_section_status
    order: number
    courseId: string
    createdAt: Date
    updatedAt: Date
    _count: CourseSectionCountAggregateOutputType | null
    _avg: CourseSectionAvgAggregateOutputType | null
    _sum: CourseSectionSumAggregateOutputType | null
    _min: CourseSectionMinAggregateOutputType | null
    _max: CourseSectionMaxAggregateOutputType | null
  }

  type GetCourseSectionGroupByPayload<T extends CourseSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseSectionGroupByOutputType[P]>
            : GetScalarType<T[P], CourseSectionGroupByOutputType[P]>
        }
      >
    >


  export type CourseSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    order?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lessons?: boolean | CourseSection$lessonsArgs<ExtArgs>
    _count?: boolean | CourseSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseSection"]>

  export type CourseSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    order?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseSection"]>

  export type CourseSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    order?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseSection"]>

  export type CourseSectionSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    order?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "order" | "courseId" | "createdAt" | "updatedAt", ExtArgs["result"]["courseSection"]>
  export type CourseSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lessons?: boolean | CourseSection$lessonsArgs<ExtArgs>
    _count?: boolean | CourseSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseSection"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      lessons: Prisma.$LessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: $Enums.course_section_status
      order: number
      courseId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseSection"]>
    composites: {}
  }

  type CourseSectionGetPayload<S extends boolean | null | undefined | CourseSectionDefaultArgs> = $Result.GetResult<Prisma.$CourseSectionPayload, S>

  type CourseSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseSectionCountAggregateInputType | true
    }

  export interface CourseSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseSection'], meta: { name: 'CourseSection' } }
    /**
     * Find zero or one CourseSection that matches the filter.
     * @param {CourseSectionFindUniqueArgs} args - Arguments to find a CourseSection
     * @example
     * // Get one CourseSection
     * const courseSection = await prisma.courseSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseSectionFindUniqueArgs>(args: SelectSubset<T, CourseSectionFindUniqueArgs<ExtArgs>>): Prisma__CourseSectionClient<$Result.GetResult<Prisma.$CourseSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseSectionFindUniqueOrThrowArgs} args - Arguments to find a CourseSection
     * @example
     * // Get one CourseSection
     * const courseSection = await prisma.courseSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseSectionClient<$Result.GetResult<Prisma.$CourseSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSectionFindFirstArgs} args - Arguments to find a CourseSection
     * @example
     * // Get one CourseSection
     * const courseSection = await prisma.courseSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseSectionFindFirstArgs>(args?: SelectSubset<T, CourseSectionFindFirstArgs<ExtArgs>>): Prisma__CourseSectionClient<$Result.GetResult<Prisma.$CourseSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSectionFindFirstOrThrowArgs} args - Arguments to find a CourseSection
     * @example
     * // Get one CourseSection
     * const courseSection = await prisma.courseSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseSectionClient<$Result.GetResult<Prisma.$CourseSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseSections
     * const courseSections = await prisma.courseSection.findMany()
     * 
     * // Get first 10 CourseSections
     * const courseSections = await prisma.courseSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseSectionWithIdOnly = await prisma.courseSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseSectionFindManyArgs>(args?: SelectSubset<T, CourseSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseSection.
     * @param {CourseSectionCreateArgs} args - Arguments to create a CourseSection.
     * @example
     * // Create one CourseSection
     * const CourseSection = await prisma.courseSection.create({
     *   data: {
     *     // ... data to create a CourseSection
     *   }
     * })
     * 
     */
    create<T extends CourseSectionCreateArgs>(args: SelectSubset<T, CourseSectionCreateArgs<ExtArgs>>): Prisma__CourseSectionClient<$Result.GetResult<Prisma.$CourseSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseSections.
     * @param {CourseSectionCreateManyArgs} args - Arguments to create many CourseSections.
     * @example
     * // Create many CourseSections
     * const courseSection = await prisma.courseSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseSectionCreateManyArgs>(args?: SelectSubset<T, CourseSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseSections and returns the data saved in the database.
     * @param {CourseSectionCreateManyAndReturnArgs} args - Arguments to create many CourseSections.
     * @example
     * // Create many CourseSections
     * const courseSection = await prisma.courseSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseSections and only return the `id`
     * const courseSectionWithIdOnly = await prisma.courseSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseSection.
     * @param {CourseSectionDeleteArgs} args - Arguments to delete one CourseSection.
     * @example
     * // Delete one CourseSection
     * const CourseSection = await prisma.courseSection.delete({
     *   where: {
     *     // ... filter to delete one CourseSection
     *   }
     * })
     * 
     */
    delete<T extends CourseSectionDeleteArgs>(args: SelectSubset<T, CourseSectionDeleteArgs<ExtArgs>>): Prisma__CourseSectionClient<$Result.GetResult<Prisma.$CourseSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseSection.
     * @param {CourseSectionUpdateArgs} args - Arguments to update one CourseSection.
     * @example
     * // Update one CourseSection
     * const courseSection = await prisma.courseSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseSectionUpdateArgs>(args: SelectSubset<T, CourseSectionUpdateArgs<ExtArgs>>): Prisma__CourseSectionClient<$Result.GetResult<Prisma.$CourseSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseSections.
     * @param {CourseSectionDeleteManyArgs} args - Arguments to filter CourseSections to delete.
     * @example
     * // Delete a few CourseSections
     * const { count } = await prisma.courseSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseSectionDeleteManyArgs>(args?: SelectSubset<T, CourseSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseSections
     * const courseSection = await prisma.courseSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseSectionUpdateManyArgs>(args: SelectSubset<T, CourseSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseSections and returns the data updated in the database.
     * @param {CourseSectionUpdateManyAndReturnArgs} args - Arguments to update many CourseSections.
     * @example
     * // Update many CourseSections
     * const courseSection = await prisma.courseSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseSections and only return the `id`
     * const courseSectionWithIdOnly = await prisma.courseSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseSection.
     * @param {CourseSectionUpsertArgs} args - Arguments to update or create a CourseSection.
     * @example
     * // Update or create a CourseSection
     * const courseSection = await prisma.courseSection.upsert({
     *   create: {
     *     // ... data to create a CourseSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseSection we want to update
     *   }
     * })
     */
    upsert<T extends CourseSectionUpsertArgs>(args: SelectSubset<T, CourseSectionUpsertArgs<ExtArgs>>): Prisma__CourseSectionClient<$Result.GetResult<Prisma.$CourseSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSectionCountArgs} args - Arguments to filter CourseSections to count.
     * @example
     * // Count the number of CourseSections
     * const count = await prisma.courseSection.count({
     *   where: {
     *     // ... the filter for the CourseSections we want to count
     *   }
     * })
    **/
    count<T extends CourseSectionCountArgs>(
      args?: Subset<T, CourseSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseSectionAggregateArgs>(args: Subset<T, CourseSectionAggregateArgs>): Prisma.PrismaPromise<GetCourseSectionAggregateType<T>>

    /**
     * Group by CourseSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSectionGroupByArgs} args - Group by arguments.
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
      T extends CourseSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseSectionGroupByArgs['orderBy'] }
        : { orderBy?: CourseSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseSection model
   */
  readonly fields: CourseSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lessons<T extends CourseSection$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, CourseSection$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CourseSection model
   */
  interface CourseSectionFieldRefs {
    readonly id: FieldRef<"CourseSection", 'String'>
    readonly name: FieldRef<"CourseSection", 'String'>
    readonly status: FieldRef<"CourseSection", 'course_section_status'>
    readonly order: FieldRef<"CourseSection", 'Int'>
    readonly courseId: FieldRef<"CourseSection", 'String'>
    readonly createdAt: FieldRef<"CourseSection", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseSection findUnique
   */
  export type CourseSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSection
     */
    select?: CourseSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSection
     */
    omit?: CourseSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSectionInclude<ExtArgs> | null
    /**
     * Filter, which CourseSection to fetch.
     */
    where: CourseSectionWhereUniqueInput
  }

  /**
   * CourseSection findUniqueOrThrow
   */
  export type CourseSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSection
     */
    select?: CourseSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSection
     */
    omit?: CourseSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSectionInclude<ExtArgs> | null
    /**
     * Filter, which CourseSection to fetch.
     */
    where: CourseSectionWhereUniqueInput
  }

  /**
   * CourseSection findFirst
   */
  export type CourseSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSection
     */
    select?: CourseSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSection
     */
    omit?: CourseSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSectionInclude<ExtArgs> | null
    /**
     * Filter, which CourseSection to fetch.
     */
    where?: CourseSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseSections to fetch.
     */
    orderBy?: CourseSectionOrderByWithRelationInput | CourseSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseSections.
     */
    cursor?: CourseSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseSections.
     */
    distinct?: CourseSectionScalarFieldEnum | CourseSectionScalarFieldEnum[]
  }

  /**
   * CourseSection findFirstOrThrow
   */
  export type CourseSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSection
     */
    select?: CourseSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSection
     */
    omit?: CourseSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSectionInclude<ExtArgs> | null
    /**
     * Filter, which CourseSection to fetch.
     */
    where?: CourseSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseSections to fetch.
     */
    orderBy?: CourseSectionOrderByWithRelationInput | CourseSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseSections.
     */
    cursor?: CourseSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseSections.
     */
    distinct?: CourseSectionScalarFieldEnum | CourseSectionScalarFieldEnum[]
  }

  /**
   * CourseSection findMany
   */
  export type CourseSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSection
     */
    select?: CourseSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSection
     */
    omit?: CourseSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSectionInclude<ExtArgs> | null
    /**
     * Filter, which CourseSections to fetch.
     */
    where?: CourseSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseSections to fetch.
     */
    orderBy?: CourseSectionOrderByWithRelationInput | CourseSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseSections.
     */
    cursor?: CourseSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseSections.
     */
    skip?: number
    distinct?: CourseSectionScalarFieldEnum | CourseSectionScalarFieldEnum[]
  }

  /**
   * CourseSection create
   */
  export type CourseSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSection
     */
    select?: CourseSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSection
     */
    omit?: CourseSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseSection.
     */
    data: XOR<CourseSectionCreateInput, CourseSectionUncheckedCreateInput>
  }

  /**
   * CourseSection createMany
   */
  export type CourseSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseSections.
     */
    data: CourseSectionCreateManyInput | CourseSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseSection createManyAndReturn
   */
  export type CourseSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSection
     */
    select?: CourseSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSection
     */
    omit?: CourseSectionOmit<ExtArgs> | null
    /**
     * The data used to create many CourseSections.
     */
    data: CourseSectionCreateManyInput | CourseSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseSection update
   */
  export type CourseSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSection
     */
    select?: CourseSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSection
     */
    omit?: CourseSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseSection.
     */
    data: XOR<CourseSectionUpdateInput, CourseSectionUncheckedUpdateInput>
    /**
     * Choose, which CourseSection to update.
     */
    where: CourseSectionWhereUniqueInput
  }

  /**
   * CourseSection updateMany
   */
  export type CourseSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseSections.
     */
    data: XOR<CourseSectionUpdateManyMutationInput, CourseSectionUncheckedUpdateManyInput>
    /**
     * Filter which CourseSections to update
     */
    where?: CourseSectionWhereInput
    /**
     * Limit how many CourseSections to update.
     */
    limit?: number
  }

  /**
   * CourseSection updateManyAndReturn
   */
  export type CourseSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSection
     */
    select?: CourseSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSection
     */
    omit?: CourseSectionOmit<ExtArgs> | null
    /**
     * The data used to update CourseSections.
     */
    data: XOR<CourseSectionUpdateManyMutationInput, CourseSectionUncheckedUpdateManyInput>
    /**
     * Filter which CourseSections to update
     */
    where?: CourseSectionWhereInput
    /**
     * Limit how many CourseSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseSection upsert
   */
  export type CourseSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSection
     */
    select?: CourseSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSection
     */
    omit?: CourseSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseSection to update in case it exists.
     */
    where: CourseSectionWhereUniqueInput
    /**
     * In case the CourseSection found by the `where` argument doesn't exist, create a new CourseSection with this data.
     */
    create: XOR<CourseSectionCreateInput, CourseSectionUncheckedCreateInput>
    /**
     * In case the CourseSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseSectionUpdateInput, CourseSectionUncheckedUpdateInput>
  }

  /**
   * CourseSection delete
   */
  export type CourseSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSection
     */
    select?: CourseSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSection
     */
    omit?: CourseSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSectionInclude<ExtArgs> | null
    /**
     * Filter which CourseSection to delete.
     */
    where: CourseSectionWhereUniqueInput
  }

  /**
   * CourseSection deleteMany
   */
  export type CourseSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseSections to delete
     */
    where?: CourseSectionWhereInput
    /**
     * Limit how many CourseSections to delete.
     */
    limit?: number
  }

  /**
   * CourseSection.lessons
   */
  export type CourseSection$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * CourseSection without action
   */
  export type CourseSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSection
     */
    select?: CourseSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSection
     */
    omit?: CourseSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSectionInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    order: number | null
  }

  export type LessonSumAggregateOutputType = {
    order: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    youtubeVideoId: string | null
    order: number | null
    status: $Enums.lesson_status | null
    sectionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    youtubeVideoId: string | null
    order: number | null
    status: $Enums.lesson_status | null
    sectionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    name: number
    description: number
    youtubeVideoId: number
    order: number
    status: number
    sectionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    order?: true
  }

  export type LessonSumAggregateInputType = {
    order?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    youtubeVideoId?: true
    order?: true
    status?: true
    sectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    youtubeVideoId?: true
    order?: true
    status?: true
    sectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    youtubeVideoId?: true
    order?: true
    status?: true
    sectionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: string
    name: string
    description: string | null
    youtubeVideoId: string
    order: number
    status: $Enums.lesson_status
    sectionId: string
    createdAt: Date
    updatedAt: Date
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    youtubeVideoId?: boolean
    order?: boolean
    status?: boolean
    sectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | CourseSectionDefaultArgs<ExtArgs>
    userLessonsComplete?: boolean | Lesson$userLessonsCompleteArgs<ExtArgs>
    CompletedLesson?: boolean | Lesson$CompletedLessonArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    youtubeVideoId?: boolean
    order?: boolean
    status?: boolean
    sectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | CourseSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    youtubeVideoId?: boolean
    order?: boolean
    status?: boolean
    sectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | CourseSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    youtubeVideoId?: boolean
    order?: boolean
    status?: boolean
    sectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "youtubeVideoId" | "order" | "status" | "sectionId" | "createdAt" | "updatedAt", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | CourseSectionDefaultArgs<ExtArgs>
    userLessonsComplete?: boolean | Lesson$userLessonsCompleteArgs<ExtArgs>
    CompletedLesson?: boolean | Lesson$CompletedLessonArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | CourseSectionDefaultArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | CourseSectionDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      section: Prisma.$CourseSectionPayload<ExtArgs>
      userLessonsComplete: Prisma.$UserLessonCompletePayload<ExtArgs>[]
      CompletedLesson: Prisma.$CompletedLessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      youtubeVideoId: string
      order: number
      status: $Enums.lesson_status
      sectionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
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
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends CourseSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseSectionDefaultArgs<ExtArgs>>): Prisma__CourseSectionClient<$Result.GetResult<Prisma.$CourseSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userLessonsComplete<T extends Lesson$userLessonsCompleteArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$userLessonsCompleteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLessonCompletePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CompletedLesson<T extends Lesson$CompletedLessonArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$CompletedLessonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedLessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'String'>
    readonly name: FieldRef<"Lesson", 'String'>
    readonly description: FieldRef<"Lesson", 'String'>
    readonly youtubeVideoId: FieldRef<"Lesson", 'String'>
    readonly order: FieldRef<"Lesson", 'Int'>
    readonly status: FieldRef<"Lesson", 'lesson_status'>
    readonly sectionId: FieldRef<"Lesson", 'String'>
    readonly createdAt: FieldRef<"Lesson", 'DateTime'>
    readonly updatedAt: FieldRef<"Lesson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.userLessonsComplete
   */
  export type Lesson$userLessonsCompleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteInclude<ExtArgs> | null
    where?: UserLessonCompleteWhereInput
    orderBy?: UserLessonCompleteOrderByWithRelationInput | UserLessonCompleteOrderByWithRelationInput[]
    cursor?: UserLessonCompleteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLessonCompleteScalarFieldEnum | UserLessonCompleteScalarFieldEnum[]
  }

  /**
   * Lesson.CompletedLesson
   */
  export type Lesson$CompletedLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonInclude<ExtArgs> | null
    where?: CompletedLessonWhereInput
    orderBy?: CompletedLessonOrderByWithRelationInput | CompletedLessonOrderByWithRelationInput[]
    cursor?: CompletedLessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedLessonScalarFieldEnum | CompletedLessonScalarFieldEnum[]
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    priceInDollars: number | null
  }

  export type ProductSumAggregateOutputType = {
    priceInDollars: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    priceInDollars: number | null
    status: $Enums.product_status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    priceInDollars: number | null
    status: $Enums.product_status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    priceInDollars: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    priceInDollars?: true
  }

  export type ProductSumAggregateInputType = {
    priceInDollars?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    priceInDollars?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    priceInDollars?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    priceInDollars?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string
    imageUrl: string
    priceInDollars: number
    status: $Enums.product_status
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    priceInDollars?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseProducts?: boolean | Product$courseProductsArgs<ExtArgs>
    purchases?: boolean | Product$purchasesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    priceInDollars?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    priceInDollars?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    priceInDollars?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl" | "priceInDollars" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseProducts?: boolean | Product$courseProductsArgs<ExtArgs>
    purchases?: boolean | Product$purchasesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      courseProducts: Prisma.$CourseProductPayload<ExtArgs>[]
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      imageUrl: string
      priceInDollars: number
      status: $Enums.product_status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseProducts<T extends Product$courseProductsArgs<ExtArgs> = {}>(args?: Subset<T, Product$courseProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends Product$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Product$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly priceInDollars: FieldRef<"Product", 'Int'>
    readonly status: FieldRef<"Product", 'product_status'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.courseProducts
   */
  export type Product$courseProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProduct
     */
    select?: CourseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProduct
     */
    omit?: CourseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProductInclude<ExtArgs> | null
    where?: CourseProductWhereInput
    orderBy?: CourseProductOrderByWithRelationInput | CourseProductOrderByWithRelationInput[]
    cursor?: CourseProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseProductScalarFieldEnum | CourseProductScalarFieldEnum[]
  }

  /**
   * Product.purchases
   */
  export type Product$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    pricePaidInCents: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    pricePaidInCents: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: string | null
    pricePaidInCents: number | null
    userId: string | null
    productId: string | null
    stripeSessionId: string | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: string | null
    pricePaidInCents: number | null
    userId: string | null
    productId: string | null
    stripeSessionId: string | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    pricePaidInCents: number
    productDetails: number
    userId: number
    productId: number
    stripeSessionId: number
    refundedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    pricePaidInCents?: true
  }

  export type PurchaseSumAggregateInputType = {
    pricePaidInCents?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    pricePaidInCents?: true
    userId?: true
    productId?: true
    stripeSessionId?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    pricePaidInCents?: true
    userId?: true
    productId?: true
    stripeSessionId?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    pricePaidInCents?: true
    productDetails?: true
    userId?: true
    productId?: true
    stripeSessionId?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: string
    pricePaidInCents: number
    productDetails: JsonValue
    userId: string
    productId: string
    stripeSessionId: string
    refundedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricePaidInCents?: boolean
    productDetails?: boolean
    userId?: boolean
    productId?: boolean
    stripeSessionId?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricePaidInCents?: boolean
    productDetails?: boolean
    userId?: boolean
    productId?: boolean
    stripeSessionId?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricePaidInCents?: boolean
    productDetails?: boolean
    userId?: boolean
    productId?: boolean
    stripeSessionId?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    pricePaidInCents?: boolean
    productDetails?: boolean
    userId?: boolean
    productId?: boolean
    stripeSessionId?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pricePaidInCents" | "productDetails" | "userId" | "productId" | "stripeSessionId" | "refundedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pricePaidInCents: number
      productDetails: Prisma.JsonValue
      userId: string
      productId: string
      stripeSessionId: string
      refundedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
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
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'String'>
    readonly pricePaidInCents: FieldRef<"Purchase", 'Int'>
    readonly productDetails: FieldRef<"Purchase", 'Json'>
    readonly userId: FieldRef<"Purchase", 'String'>
    readonly productId: FieldRef<"Purchase", 'String'>
    readonly stripeSessionId: FieldRef<"Purchase", 'String'>
    readonly refundedAt: FieldRef<"Purchase", 'DateTime'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
    readonly updatedAt: FieldRef<"Purchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model UserCourseAccess
   */

  export type AggregateUserCourseAccess = {
    _count: UserCourseAccessCountAggregateOutputType | null
    _min: UserCourseAccessMinAggregateOutputType | null
    _max: UserCourseAccessMaxAggregateOutputType | null
  }

  export type UserCourseAccessMinAggregateOutputType = {
    userId: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCourseAccessMaxAggregateOutputType = {
    userId: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCourseAccessCountAggregateOutputType = {
    userId: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserCourseAccessMinAggregateInputType = {
    userId?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCourseAccessMaxAggregateInputType = {
    userId?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCourseAccessCountAggregateInputType = {
    userId?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCourseAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourseAccess to aggregate.
     */
    where?: UserCourseAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseAccesses to fetch.
     */
    orderBy?: UserCourseAccessOrderByWithRelationInput | UserCourseAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCourseAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCourseAccesses
    **/
    _count?: true | UserCourseAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCourseAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCourseAccessMaxAggregateInputType
  }

  export type GetUserCourseAccessAggregateType<T extends UserCourseAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCourseAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCourseAccess[P]>
      : GetScalarType<T[P], AggregateUserCourseAccess[P]>
  }




  export type UserCourseAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseAccessWhereInput
    orderBy?: UserCourseAccessOrderByWithAggregationInput | UserCourseAccessOrderByWithAggregationInput[]
    by: UserCourseAccessScalarFieldEnum[] | UserCourseAccessScalarFieldEnum
    having?: UserCourseAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCourseAccessCountAggregateInputType | true
    _min?: UserCourseAccessMinAggregateInputType
    _max?: UserCourseAccessMaxAggregateInputType
  }

  export type UserCourseAccessGroupByOutputType = {
    userId: string
    courseId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCourseAccessCountAggregateOutputType | null
    _min: UserCourseAccessMinAggregateOutputType | null
    _max: UserCourseAccessMaxAggregateOutputType | null
  }

  type GetUserCourseAccessGroupByPayload<T extends UserCourseAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCourseAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCourseAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCourseAccessGroupByOutputType[P]>
            : GetScalarType<T[P], UserCourseAccessGroupByOutputType[P]>
        }
      >
    >


  export type UserCourseAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCourseAccess"]>

  export type UserCourseAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCourseAccess"]>

  export type UserCourseAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCourseAccess"]>

  export type UserCourseAccessSelectScalar = {
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserCourseAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "courseId" | "createdAt" | "updatedAt", ExtArgs["result"]["userCourseAccess"]>
  export type UserCourseAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type UserCourseAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type UserCourseAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $UserCourseAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCourseAccess"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      courseId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userCourseAccess"]>
    composites: {}
  }

  type UserCourseAccessGetPayload<S extends boolean | null | undefined | UserCourseAccessDefaultArgs> = $Result.GetResult<Prisma.$UserCourseAccessPayload, S>

  type UserCourseAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCourseAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCourseAccessCountAggregateInputType | true
    }

  export interface UserCourseAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCourseAccess'], meta: { name: 'UserCourseAccess' } }
    /**
     * Find zero or one UserCourseAccess that matches the filter.
     * @param {UserCourseAccessFindUniqueArgs} args - Arguments to find a UserCourseAccess
     * @example
     * // Get one UserCourseAccess
     * const userCourseAccess = await prisma.userCourseAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCourseAccessFindUniqueArgs>(args: SelectSubset<T, UserCourseAccessFindUniqueArgs<ExtArgs>>): Prisma__UserCourseAccessClient<$Result.GetResult<Prisma.$UserCourseAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCourseAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCourseAccessFindUniqueOrThrowArgs} args - Arguments to find a UserCourseAccess
     * @example
     * // Get one UserCourseAccess
     * const userCourseAccess = await prisma.userCourseAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCourseAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCourseAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCourseAccessClient<$Result.GetResult<Prisma.$UserCourseAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourseAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseAccessFindFirstArgs} args - Arguments to find a UserCourseAccess
     * @example
     * // Get one UserCourseAccess
     * const userCourseAccess = await prisma.userCourseAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCourseAccessFindFirstArgs>(args?: SelectSubset<T, UserCourseAccessFindFirstArgs<ExtArgs>>): Prisma__UserCourseAccessClient<$Result.GetResult<Prisma.$UserCourseAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourseAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseAccessFindFirstOrThrowArgs} args - Arguments to find a UserCourseAccess
     * @example
     * // Get one UserCourseAccess
     * const userCourseAccess = await prisma.userCourseAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCourseAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCourseAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCourseAccessClient<$Result.GetResult<Prisma.$UserCourseAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCourseAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCourseAccesses
     * const userCourseAccesses = await prisma.userCourseAccess.findMany()
     * 
     * // Get first 10 UserCourseAccesses
     * const userCourseAccesses = await prisma.userCourseAccess.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userCourseAccessWithUserIdOnly = await prisma.userCourseAccess.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserCourseAccessFindManyArgs>(args?: SelectSubset<T, UserCourseAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCourseAccess.
     * @param {UserCourseAccessCreateArgs} args - Arguments to create a UserCourseAccess.
     * @example
     * // Create one UserCourseAccess
     * const UserCourseAccess = await prisma.userCourseAccess.create({
     *   data: {
     *     // ... data to create a UserCourseAccess
     *   }
     * })
     * 
     */
    create<T extends UserCourseAccessCreateArgs>(args: SelectSubset<T, UserCourseAccessCreateArgs<ExtArgs>>): Prisma__UserCourseAccessClient<$Result.GetResult<Prisma.$UserCourseAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCourseAccesses.
     * @param {UserCourseAccessCreateManyArgs} args - Arguments to create many UserCourseAccesses.
     * @example
     * // Create many UserCourseAccesses
     * const userCourseAccess = await prisma.userCourseAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCourseAccessCreateManyArgs>(args?: SelectSubset<T, UserCourseAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCourseAccesses and returns the data saved in the database.
     * @param {UserCourseAccessCreateManyAndReturnArgs} args - Arguments to create many UserCourseAccesses.
     * @example
     * // Create many UserCourseAccesses
     * const userCourseAccess = await prisma.userCourseAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCourseAccesses and only return the `userId`
     * const userCourseAccessWithUserIdOnly = await prisma.userCourseAccess.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCourseAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCourseAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCourseAccess.
     * @param {UserCourseAccessDeleteArgs} args - Arguments to delete one UserCourseAccess.
     * @example
     * // Delete one UserCourseAccess
     * const UserCourseAccess = await prisma.userCourseAccess.delete({
     *   where: {
     *     // ... filter to delete one UserCourseAccess
     *   }
     * })
     * 
     */
    delete<T extends UserCourseAccessDeleteArgs>(args: SelectSubset<T, UserCourseAccessDeleteArgs<ExtArgs>>): Prisma__UserCourseAccessClient<$Result.GetResult<Prisma.$UserCourseAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCourseAccess.
     * @param {UserCourseAccessUpdateArgs} args - Arguments to update one UserCourseAccess.
     * @example
     * // Update one UserCourseAccess
     * const userCourseAccess = await prisma.userCourseAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCourseAccessUpdateArgs>(args: SelectSubset<T, UserCourseAccessUpdateArgs<ExtArgs>>): Prisma__UserCourseAccessClient<$Result.GetResult<Prisma.$UserCourseAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCourseAccesses.
     * @param {UserCourseAccessDeleteManyArgs} args - Arguments to filter UserCourseAccesses to delete.
     * @example
     * // Delete a few UserCourseAccesses
     * const { count } = await prisma.userCourseAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCourseAccessDeleteManyArgs>(args?: SelectSubset<T, UserCourseAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCourseAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCourseAccesses
     * const userCourseAccess = await prisma.userCourseAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCourseAccessUpdateManyArgs>(args: SelectSubset<T, UserCourseAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCourseAccesses and returns the data updated in the database.
     * @param {UserCourseAccessUpdateManyAndReturnArgs} args - Arguments to update many UserCourseAccesses.
     * @example
     * // Update many UserCourseAccesses
     * const userCourseAccess = await prisma.userCourseAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCourseAccesses and only return the `userId`
     * const userCourseAccessWithUserIdOnly = await prisma.userCourseAccess.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserCourseAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCourseAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCourseAccess.
     * @param {UserCourseAccessUpsertArgs} args - Arguments to update or create a UserCourseAccess.
     * @example
     * // Update or create a UserCourseAccess
     * const userCourseAccess = await prisma.userCourseAccess.upsert({
     *   create: {
     *     // ... data to create a UserCourseAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCourseAccess we want to update
     *   }
     * })
     */
    upsert<T extends UserCourseAccessUpsertArgs>(args: SelectSubset<T, UserCourseAccessUpsertArgs<ExtArgs>>): Prisma__UserCourseAccessClient<$Result.GetResult<Prisma.$UserCourseAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCourseAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseAccessCountArgs} args - Arguments to filter UserCourseAccesses to count.
     * @example
     * // Count the number of UserCourseAccesses
     * const count = await prisma.userCourseAccess.count({
     *   where: {
     *     // ... the filter for the UserCourseAccesses we want to count
     *   }
     * })
    **/
    count<T extends UserCourseAccessCountArgs>(
      args?: Subset<T, UserCourseAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCourseAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCourseAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCourseAccessAggregateArgs>(args: Subset<T, UserCourseAccessAggregateArgs>): Prisma.PrismaPromise<GetUserCourseAccessAggregateType<T>>

    /**
     * Group by UserCourseAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseAccessGroupByArgs} args - Group by arguments.
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
      T extends UserCourseAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCourseAccessGroupByArgs['orderBy'] }
        : { orderBy?: UserCourseAccessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCourseAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCourseAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCourseAccess model
   */
  readonly fields: UserCourseAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCourseAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCourseAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCourseAccess model
   */
  interface UserCourseAccessFieldRefs {
    readonly userId: FieldRef<"UserCourseAccess", 'String'>
    readonly courseId: FieldRef<"UserCourseAccess", 'String'>
    readonly createdAt: FieldRef<"UserCourseAccess", 'DateTime'>
    readonly updatedAt: FieldRef<"UserCourseAccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCourseAccess findUnique
   */
  export type UserCourseAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseAccess to fetch.
     */
    where: UserCourseAccessWhereUniqueInput
  }

  /**
   * UserCourseAccess findUniqueOrThrow
   */
  export type UserCourseAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseAccess to fetch.
     */
    where: UserCourseAccessWhereUniqueInput
  }

  /**
   * UserCourseAccess findFirst
   */
  export type UserCourseAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseAccess to fetch.
     */
    where?: UserCourseAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseAccesses to fetch.
     */
    orderBy?: UserCourseAccessOrderByWithRelationInput | UserCourseAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourseAccesses.
     */
    cursor?: UserCourseAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourseAccesses.
     */
    distinct?: UserCourseAccessScalarFieldEnum | UserCourseAccessScalarFieldEnum[]
  }

  /**
   * UserCourseAccess findFirstOrThrow
   */
  export type UserCourseAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseAccess to fetch.
     */
    where?: UserCourseAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseAccesses to fetch.
     */
    orderBy?: UserCourseAccessOrderByWithRelationInput | UserCourseAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourseAccesses.
     */
    cursor?: UserCourseAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourseAccesses.
     */
    distinct?: UserCourseAccessScalarFieldEnum | UserCourseAccessScalarFieldEnum[]
  }

  /**
   * UserCourseAccess findMany
   */
  export type UserCourseAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseAccesses to fetch.
     */
    where?: UserCourseAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseAccesses to fetch.
     */
    orderBy?: UserCourseAccessOrderByWithRelationInput | UserCourseAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCourseAccesses.
     */
    cursor?: UserCourseAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseAccesses.
     */
    skip?: number
    distinct?: UserCourseAccessScalarFieldEnum | UserCourseAccessScalarFieldEnum[]
  }

  /**
   * UserCourseAccess create
   */
  export type UserCourseAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCourseAccess.
     */
    data: XOR<UserCourseAccessCreateInput, UserCourseAccessUncheckedCreateInput>
  }

  /**
   * UserCourseAccess createMany
   */
  export type UserCourseAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCourseAccesses.
     */
    data: UserCourseAccessCreateManyInput | UserCourseAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCourseAccess createManyAndReturn
   */
  export type UserCourseAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * The data used to create many UserCourseAccesses.
     */
    data: UserCourseAccessCreateManyInput | UserCourseAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCourseAccess update
   */
  export type UserCourseAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCourseAccess.
     */
    data: XOR<UserCourseAccessUpdateInput, UserCourseAccessUncheckedUpdateInput>
    /**
     * Choose, which UserCourseAccess to update.
     */
    where: UserCourseAccessWhereUniqueInput
  }

  /**
   * UserCourseAccess updateMany
   */
  export type UserCourseAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCourseAccesses.
     */
    data: XOR<UserCourseAccessUpdateManyMutationInput, UserCourseAccessUncheckedUpdateManyInput>
    /**
     * Filter which UserCourseAccesses to update
     */
    where?: UserCourseAccessWhereInput
    /**
     * Limit how many UserCourseAccesses to update.
     */
    limit?: number
  }

  /**
   * UserCourseAccess updateManyAndReturn
   */
  export type UserCourseAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * The data used to update UserCourseAccesses.
     */
    data: XOR<UserCourseAccessUpdateManyMutationInput, UserCourseAccessUncheckedUpdateManyInput>
    /**
     * Filter which UserCourseAccesses to update
     */
    where?: UserCourseAccessWhereInput
    /**
     * Limit how many UserCourseAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCourseAccess upsert
   */
  export type UserCourseAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCourseAccess to update in case it exists.
     */
    where: UserCourseAccessWhereUniqueInput
    /**
     * In case the UserCourseAccess found by the `where` argument doesn't exist, create a new UserCourseAccess with this data.
     */
    create: XOR<UserCourseAccessCreateInput, UserCourseAccessUncheckedCreateInput>
    /**
     * In case the UserCourseAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCourseAccessUpdateInput, UserCourseAccessUncheckedUpdateInput>
  }

  /**
   * UserCourseAccess delete
   */
  export type UserCourseAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessInclude<ExtArgs> | null
    /**
     * Filter which UserCourseAccess to delete.
     */
    where: UserCourseAccessWhereUniqueInput
  }

  /**
   * UserCourseAccess deleteMany
   */
  export type UserCourseAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourseAccesses to delete
     */
    where?: UserCourseAccessWhereInput
    /**
     * Limit how many UserCourseAccesses to delete.
     */
    limit?: number
  }

  /**
   * UserCourseAccess without action
   */
  export type UserCourseAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseAccess
     */
    select?: UserCourseAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseAccess
     */
    omit?: UserCourseAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseAccessInclude<ExtArgs> | null
  }


  /**
   * Model UserLessonComplete
   */

  export type AggregateUserLessonComplete = {
    _count: UserLessonCompleteCountAggregateOutputType | null
    _min: UserLessonCompleteMinAggregateOutputType | null
    _max: UserLessonCompleteMaxAggregateOutputType | null
  }

  export type UserLessonCompleteMinAggregateOutputType = {
    userId: string | null
    lessonId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLessonCompleteMaxAggregateOutputType = {
    userId: string | null
    lessonId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLessonCompleteCountAggregateOutputType = {
    userId: number
    lessonId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserLessonCompleteMinAggregateInputType = {
    userId?: true
    lessonId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLessonCompleteMaxAggregateInputType = {
    userId?: true
    lessonId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLessonCompleteCountAggregateInputType = {
    userId?: true
    lessonId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserLessonCompleteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLessonComplete to aggregate.
     */
    where?: UserLessonCompleteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLessonCompletes to fetch.
     */
    orderBy?: UserLessonCompleteOrderByWithRelationInput | UserLessonCompleteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLessonCompleteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLessonCompletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLessonCompletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLessonCompletes
    **/
    _count?: true | UserLessonCompleteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLessonCompleteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLessonCompleteMaxAggregateInputType
  }

  export type GetUserLessonCompleteAggregateType<T extends UserLessonCompleteAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLessonComplete]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLessonComplete[P]>
      : GetScalarType<T[P], AggregateUserLessonComplete[P]>
  }




  export type UserLessonCompleteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLessonCompleteWhereInput
    orderBy?: UserLessonCompleteOrderByWithAggregationInput | UserLessonCompleteOrderByWithAggregationInput[]
    by: UserLessonCompleteScalarFieldEnum[] | UserLessonCompleteScalarFieldEnum
    having?: UserLessonCompleteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLessonCompleteCountAggregateInputType | true
    _min?: UserLessonCompleteMinAggregateInputType
    _max?: UserLessonCompleteMaxAggregateInputType
  }

  export type UserLessonCompleteGroupByOutputType = {
    userId: string
    lessonId: string
    createdAt: Date
    updatedAt: Date
    _count: UserLessonCompleteCountAggregateOutputType | null
    _min: UserLessonCompleteMinAggregateOutputType | null
    _max: UserLessonCompleteMaxAggregateOutputType | null
  }

  type GetUserLessonCompleteGroupByPayload<T extends UserLessonCompleteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLessonCompleteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLessonCompleteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLessonCompleteGroupByOutputType[P]>
            : GetScalarType<T[P], UserLessonCompleteGroupByOutputType[P]>
        }
      >
    >


  export type UserLessonCompleteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    lessonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLessonComplete"]>

  export type UserLessonCompleteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    lessonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLessonComplete"]>

  export type UserLessonCompleteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    lessonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLessonComplete"]>

  export type UserLessonCompleteSelectScalar = {
    userId?: boolean
    lessonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserLessonCompleteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "lessonId" | "createdAt" | "updatedAt", ExtArgs["result"]["userLessonComplete"]>
  export type UserLessonCompleteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type UserLessonCompleteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type UserLessonCompleteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $UserLessonCompletePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLessonComplete"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      lessonId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userLessonComplete"]>
    composites: {}
  }

  type UserLessonCompleteGetPayload<S extends boolean | null | undefined | UserLessonCompleteDefaultArgs> = $Result.GetResult<Prisma.$UserLessonCompletePayload, S>

  type UserLessonCompleteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLessonCompleteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLessonCompleteCountAggregateInputType | true
    }

  export interface UserLessonCompleteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLessonComplete'], meta: { name: 'UserLessonComplete' } }
    /**
     * Find zero or one UserLessonComplete that matches the filter.
     * @param {UserLessonCompleteFindUniqueArgs} args - Arguments to find a UserLessonComplete
     * @example
     * // Get one UserLessonComplete
     * const userLessonComplete = await prisma.userLessonComplete.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLessonCompleteFindUniqueArgs>(args: SelectSubset<T, UserLessonCompleteFindUniqueArgs<ExtArgs>>): Prisma__UserLessonCompleteClient<$Result.GetResult<Prisma.$UserLessonCompletePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLessonComplete that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLessonCompleteFindUniqueOrThrowArgs} args - Arguments to find a UserLessonComplete
     * @example
     * // Get one UserLessonComplete
     * const userLessonComplete = await prisma.userLessonComplete.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLessonCompleteFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLessonCompleteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLessonCompleteClient<$Result.GetResult<Prisma.$UserLessonCompletePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLessonComplete that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonCompleteFindFirstArgs} args - Arguments to find a UserLessonComplete
     * @example
     * // Get one UserLessonComplete
     * const userLessonComplete = await prisma.userLessonComplete.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLessonCompleteFindFirstArgs>(args?: SelectSubset<T, UserLessonCompleteFindFirstArgs<ExtArgs>>): Prisma__UserLessonCompleteClient<$Result.GetResult<Prisma.$UserLessonCompletePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLessonComplete that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonCompleteFindFirstOrThrowArgs} args - Arguments to find a UserLessonComplete
     * @example
     * // Get one UserLessonComplete
     * const userLessonComplete = await prisma.userLessonComplete.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLessonCompleteFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLessonCompleteFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLessonCompleteClient<$Result.GetResult<Prisma.$UserLessonCompletePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLessonCompletes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonCompleteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLessonCompletes
     * const userLessonCompletes = await prisma.userLessonComplete.findMany()
     * 
     * // Get first 10 UserLessonCompletes
     * const userLessonCompletes = await prisma.userLessonComplete.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userLessonCompleteWithUserIdOnly = await prisma.userLessonComplete.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserLessonCompleteFindManyArgs>(args?: SelectSubset<T, UserLessonCompleteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLessonCompletePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLessonComplete.
     * @param {UserLessonCompleteCreateArgs} args - Arguments to create a UserLessonComplete.
     * @example
     * // Create one UserLessonComplete
     * const UserLessonComplete = await prisma.userLessonComplete.create({
     *   data: {
     *     // ... data to create a UserLessonComplete
     *   }
     * })
     * 
     */
    create<T extends UserLessonCompleteCreateArgs>(args: SelectSubset<T, UserLessonCompleteCreateArgs<ExtArgs>>): Prisma__UserLessonCompleteClient<$Result.GetResult<Prisma.$UserLessonCompletePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLessonCompletes.
     * @param {UserLessonCompleteCreateManyArgs} args - Arguments to create many UserLessonCompletes.
     * @example
     * // Create many UserLessonCompletes
     * const userLessonComplete = await prisma.userLessonComplete.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLessonCompleteCreateManyArgs>(args?: SelectSubset<T, UserLessonCompleteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLessonCompletes and returns the data saved in the database.
     * @param {UserLessonCompleteCreateManyAndReturnArgs} args - Arguments to create many UserLessonCompletes.
     * @example
     * // Create many UserLessonCompletes
     * const userLessonComplete = await prisma.userLessonComplete.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLessonCompletes and only return the `userId`
     * const userLessonCompleteWithUserIdOnly = await prisma.userLessonComplete.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLessonCompleteCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLessonCompleteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLessonCompletePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLessonComplete.
     * @param {UserLessonCompleteDeleteArgs} args - Arguments to delete one UserLessonComplete.
     * @example
     * // Delete one UserLessonComplete
     * const UserLessonComplete = await prisma.userLessonComplete.delete({
     *   where: {
     *     // ... filter to delete one UserLessonComplete
     *   }
     * })
     * 
     */
    delete<T extends UserLessonCompleteDeleteArgs>(args: SelectSubset<T, UserLessonCompleteDeleteArgs<ExtArgs>>): Prisma__UserLessonCompleteClient<$Result.GetResult<Prisma.$UserLessonCompletePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLessonComplete.
     * @param {UserLessonCompleteUpdateArgs} args - Arguments to update one UserLessonComplete.
     * @example
     * // Update one UserLessonComplete
     * const userLessonComplete = await prisma.userLessonComplete.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLessonCompleteUpdateArgs>(args: SelectSubset<T, UserLessonCompleteUpdateArgs<ExtArgs>>): Prisma__UserLessonCompleteClient<$Result.GetResult<Prisma.$UserLessonCompletePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLessonCompletes.
     * @param {UserLessonCompleteDeleteManyArgs} args - Arguments to filter UserLessonCompletes to delete.
     * @example
     * // Delete a few UserLessonCompletes
     * const { count } = await prisma.userLessonComplete.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLessonCompleteDeleteManyArgs>(args?: SelectSubset<T, UserLessonCompleteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLessonCompletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonCompleteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLessonCompletes
     * const userLessonComplete = await prisma.userLessonComplete.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLessonCompleteUpdateManyArgs>(args: SelectSubset<T, UserLessonCompleteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLessonCompletes and returns the data updated in the database.
     * @param {UserLessonCompleteUpdateManyAndReturnArgs} args - Arguments to update many UserLessonCompletes.
     * @example
     * // Update many UserLessonCompletes
     * const userLessonComplete = await prisma.userLessonComplete.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLessonCompletes and only return the `userId`
     * const userLessonCompleteWithUserIdOnly = await prisma.userLessonComplete.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserLessonCompleteUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLessonCompleteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLessonCompletePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLessonComplete.
     * @param {UserLessonCompleteUpsertArgs} args - Arguments to update or create a UserLessonComplete.
     * @example
     * // Update or create a UserLessonComplete
     * const userLessonComplete = await prisma.userLessonComplete.upsert({
     *   create: {
     *     // ... data to create a UserLessonComplete
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLessonComplete we want to update
     *   }
     * })
     */
    upsert<T extends UserLessonCompleteUpsertArgs>(args: SelectSubset<T, UserLessonCompleteUpsertArgs<ExtArgs>>): Prisma__UserLessonCompleteClient<$Result.GetResult<Prisma.$UserLessonCompletePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLessonCompletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonCompleteCountArgs} args - Arguments to filter UserLessonCompletes to count.
     * @example
     * // Count the number of UserLessonCompletes
     * const count = await prisma.userLessonComplete.count({
     *   where: {
     *     // ... the filter for the UserLessonCompletes we want to count
     *   }
     * })
    **/
    count<T extends UserLessonCompleteCountArgs>(
      args?: Subset<T, UserLessonCompleteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLessonCompleteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLessonComplete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonCompleteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLessonCompleteAggregateArgs>(args: Subset<T, UserLessonCompleteAggregateArgs>): Prisma.PrismaPromise<GetUserLessonCompleteAggregateType<T>>

    /**
     * Group by UserLessonComplete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonCompleteGroupByArgs} args - Group by arguments.
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
      T extends UserLessonCompleteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLessonCompleteGroupByArgs['orderBy'] }
        : { orderBy?: UserLessonCompleteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLessonCompleteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLessonCompleteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLessonComplete model
   */
  readonly fields: UserLessonCompleteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLessonComplete.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLessonCompleteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserLessonComplete model
   */
  interface UserLessonCompleteFieldRefs {
    readonly userId: FieldRef<"UserLessonComplete", 'String'>
    readonly lessonId: FieldRef<"UserLessonComplete", 'String'>
    readonly createdAt: FieldRef<"UserLessonComplete", 'DateTime'>
    readonly updatedAt: FieldRef<"UserLessonComplete", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLessonComplete findUnique
   */
  export type UserLessonCompleteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteInclude<ExtArgs> | null
    /**
     * Filter, which UserLessonComplete to fetch.
     */
    where: UserLessonCompleteWhereUniqueInput
  }

  /**
   * UserLessonComplete findUniqueOrThrow
   */
  export type UserLessonCompleteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteInclude<ExtArgs> | null
    /**
     * Filter, which UserLessonComplete to fetch.
     */
    where: UserLessonCompleteWhereUniqueInput
  }

  /**
   * UserLessonComplete findFirst
   */
  export type UserLessonCompleteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteInclude<ExtArgs> | null
    /**
     * Filter, which UserLessonComplete to fetch.
     */
    where?: UserLessonCompleteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLessonCompletes to fetch.
     */
    orderBy?: UserLessonCompleteOrderByWithRelationInput | UserLessonCompleteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLessonCompletes.
     */
    cursor?: UserLessonCompleteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLessonCompletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLessonCompletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLessonCompletes.
     */
    distinct?: UserLessonCompleteScalarFieldEnum | UserLessonCompleteScalarFieldEnum[]
  }

  /**
   * UserLessonComplete findFirstOrThrow
   */
  export type UserLessonCompleteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteInclude<ExtArgs> | null
    /**
     * Filter, which UserLessonComplete to fetch.
     */
    where?: UserLessonCompleteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLessonCompletes to fetch.
     */
    orderBy?: UserLessonCompleteOrderByWithRelationInput | UserLessonCompleteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLessonCompletes.
     */
    cursor?: UserLessonCompleteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLessonCompletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLessonCompletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLessonCompletes.
     */
    distinct?: UserLessonCompleteScalarFieldEnum | UserLessonCompleteScalarFieldEnum[]
  }

  /**
   * UserLessonComplete findMany
   */
  export type UserLessonCompleteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteInclude<ExtArgs> | null
    /**
     * Filter, which UserLessonCompletes to fetch.
     */
    where?: UserLessonCompleteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLessonCompletes to fetch.
     */
    orderBy?: UserLessonCompleteOrderByWithRelationInput | UserLessonCompleteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLessonCompletes.
     */
    cursor?: UserLessonCompleteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLessonCompletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLessonCompletes.
     */
    skip?: number
    distinct?: UserLessonCompleteScalarFieldEnum | UserLessonCompleteScalarFieldEnum[]
  }

  /**
   * UserLessonComplete create
   */
  export type UserLessonCompleteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLessonComplete.
     */
    data: XOR<UserLessonCompleteCreateInput, UserLessonCompleteUncheckedCreateInput>
  }

  /**
   * UserLessonComplete createMany
   */
  export type UserLessonCompleteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLessonCompletes.
     */
    data: UserLessonCompleteCreateManyInput | UserLessonCompleteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLessonComplete createManyAndReturn
   */
  export type UserLessonCompleteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * The data used to create many UserLessonCompletes.
     */
    data: UserLessonCompleteCreateManyInput | UserLessonCompleteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLessonComplete update
   */
  export type UserLessonCompleteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLessonComplete.
     */
    data: XOR<UserLessonCompleteUpdateInput, UserLessonCompleteUncheckedUpdateInput>
    /**
     * Choose, which UserLessonComplete to update.
     */
    where: UserLessonCompleteWhereUniqueInput
  }

  /**
   * UserLessonComplete updateMany
   */
  export type UserLessonCompleteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLessonCompletes.
     */
    data: XOR<UserLessonCompleteUpdateManyMutationInput, UserLessonCompleteUncheckedUpdateManyInput>
    /**
     * Filter which UserLessonCompletes to update
     */
    where?: UserLessonCompleteWhereInput
    /**
     * Limit how many UserLessonCompletes to update.
     */
    limit?: number
  }

  /**
   * UserLessonComplete updateManyAndReturn
   */
  export type UserLessonCompleteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * The data used to update UserLessonCompletes.
     */
    data: XOR<UserLessonCompleteUpdateManyMutationInput, UserLessonCompleteUncheckedUpdateManyInput>
    /**
     * Filter which UserLessonCompletes to update
     */
    where?: UserLessonCompleteWhereInput
    /**
     * Limit how many UserLessonCompletes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLessonComplete upsert
   */
  export type UserLessonCompleteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLessonComplete to update in case it exists.
     */
    where: UserLessonCompleteWhereUniqueInput
    /**
     * In case the UserLessonComplete found by the `where` argument doesn't exist, create a new UserLessonComplete with this data.
     */
    create: XOR<UserLessonCompleteCreateInput, UserLessonCompleteUncheckedCreateInput>
    /**
     * In case the UserLessonComplete was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLessonCompleteUpdateInput, UserLessonCompleteUncheckedUpdateInput>
  }

  /**
   * UserLessonComplete delete
   */
  export type UserLessonCompleteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteInclude<ExtArgs> | null
    /**
     * Filter which UserLessonComplete to delete.
     */
    where: UserLessonCompleteWhereUniqueInput
  }

  /**
   * UserLessonComplete deleteMany
   */
  export type UserLessonCompleteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLessonCompletes to delete
     */
    where?: UserLessonCompleteWhereInput
    /**
     * Limit how many UserLessonCompletes to delete.
     */
    limit?: number
  }

  /**
   * UserLessonComplete without action
   */
  export type UserLessonCompleteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonComplete
     */
    select?: UserLessonCompleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonComplete
     */
    omit?: UserLessonCompleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonCompleteInclude<ExtArgs> | null
  }


  /**
   * Model CompletedLesson
   */

  export type AggregateCompletedLesson = {
    _count: CompletedLessonCountAggregateOutputType | null
    _min: CompletedLessonMinAggregateOutputType | null
    _max: CompletedLessonMaxAggregateOutputType | null
  }

  export type CompletedLessonMinAggregateOutputType = {
    userId: string | null
    lessonId: string | null
    createdAt: Date | null
  }

  export type CompletedLessonMaxAggregateOutputType = {
    userId: string | null
    lessonId: string | null
    createdAt: Date | null
  }

  export type CompletedLessonCountAggregateOutputType = {
    userId: number
    lessonId: number
    createdAt: number
    _all: number
  }


  export type CompletedLessonMinAggregateInputType = {
    userId?: true
    lessonId?: true
    createdAt?: true
  }

  export type CompletedLessonMaxAggregateInputType = {
    userId?: true
    lessonId?: true
    createdAt?: true
  }

  export type CompletedLessonCountAggregateInputType = {
    userId?: true
    lessonId?: true
    createdAt?: true
    _all?: true
  }

  export type CompletedLessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedLesson to aggregate.
     */
    where?: CompletedLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedLessons to fetch.
     */
    orderBy?: CompletedLessonOrderByWithRelationInput | CompletedLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedLessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedLessons
    **/
    _count?: true | CompletedLessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedLessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedLessonMaxAggregateInputType
  }

  export type GetCompletedLessonAggregateType<T extends CompletedLessonAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedLesson[P]>
      : GetScalarType<T[P], AggregateCompletedLesson[P]>
  }




  export type CompletedLessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedLessonWhereInput
    orderBy?: CompletedLessonOrderByWithAggregationInput | CompletedLessonOrderByWithAggregationInput[]
    by: CompletedLessonScalarFieldEnum[] | CompletedLessonScalarFieldEnum
    having?: CompletedLessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedLessonCountAggregateInputType | true
    _min?: CompletedLessonMinAggregateInputType
    _max?: CompletedLessonMaxAggregateInputType
  }

  export type CompletedLessonGroupByOutputType = {
    userId: string
    lessonId: string
    createdAt: Date
    _count: CompletedLessonCountAggregateOutputType | null
    _min: CompletedLessonMinAggregateOutputType | null
    _max: CompletedLessonMaxAggregateOutputType | null
  }

  type GetCompletedLessonGroupByPayload<T extends CompletedLessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedLessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedLessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedLessonGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedLessonGroupByOutputType[P]>
        }
      >
    >


  export type CompletedLessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    lessonId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedLesson"]>

  export type CompletedLessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    lessonId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedLesson"]>

  export type CompletedLessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    lessonId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedLesson"]>

  export type CompletedLessonSelectScalar = {
    userId?: boolean
    lessonId?: boolean
    createdAt?: boolean
  }

  export type CompletedLessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "lessonId" | "createdAt", ExtArgs["result"]["completedLesson"]>
  export type CompletedLessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type CompletedLessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type CompletedLessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $CompletedLessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedLesson"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      lessonId: string
      createdAt: Date
    }, ExtArgs["result"]["completedLesson"]>
    composites: {}
  }

  type CompletedLessonGetPayload<S extends boolean | null | undefined | CompletedLessonDefaultArgs> = $Result.GetResult<Prisma.$CompletedLessonPayload, S>

  type CompletedLessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletedLessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletedLessonCountAggregateInputType | true
    }

  export interface CompletedLessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedLesson'], meta: { name: 'CompletedLesson' } }
    /**
     * Find zero or one CompletedLesson that matches the filter.
     * @param {CompletedLessonFindUniqueArgs} args - Arguments to find a CompletedLesson
     * @example
     * // Get one CompletedLesson
     * const completedLesson = await prisma.completedLesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedLessonFindUniqueArgs>(args: SelectSubset<T, CompletedLessonFindUniqueArgs<ExtArgs>>): Prisma__CompletedLessonClient<$Result.GetResult<Prisma.$CompletedLessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompletedLesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletedLessonFindUniqueOrThrowArgs} args - Arguments to find a CompletedLesson
     * @example
     * // Get one CompletedLesson
     * const completedLesson = await prisma.completedLesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedLessonFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedLessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedLessonClient<$Result.GetResult<Prisma.$CompletedLessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedLesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedLessonFindFirstArgs} args - Arguments to find a CompletedLesson
     * @example
     * // Get one CompletedLesson
     * const completedLesson = await prisma.completedLesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedLessonFindFirstArgs>(args?: SelectSubset<T, CompletedLessonFindFirstArgs<ExtArgs>>): Prisma__CompletedLessonClient<$Result.GetResult<Prisma.$CompletedLessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedLesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedLessonFindFirstOrThrowArgs} args - Arguments to find a CompletedLesson
     * @example
     * // Get one CompletedLesson
     * const completedLesson = await prisma.completedLesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedLessonFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedLessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedLessonClient<$Result.GetResult<Prisma.$CompletedLessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompletedLessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedLessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedLessons
     * const completedLessons = await prisma.completedLesson.findMany()
     * 
     * // Get first 10 CompletedLessons
     * const completedLessons = await prisma.completedLesson.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const completedLessonWithUserIdOnly = await prisma.completedLesson.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends CompletedLessonFindManyArgs>(args?: SelectSubset<T, CompletedLessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedLessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompletedLesson.
     * @param {CompletedLessonCreateArgs} args - Arguments to create a CompletedLesson.
     * @example
     * // Create one CompletedLesson
     * const CompletedLesson = await prisma.completedLesson.create({
     *   data: {
     *     // ... data to create a CompletedLesson
     *   }
     * })
     * 
     */
    create<T extends CompletedLessonCreateArgs>(args: SelectSubset<T, CompletedLessonCreateArgs<ExtArgs>>): Prisma__CompletedLessonClient<$Result.GetResult<Prisma.$CompletedLessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompletedLessons.
     * @param {CompletedLessonCreateManyArgs} args - Arguments to create many CompletedLessons.
     * @example
     * // Create many CompletedLessons
     * const completedLesson = await prisma.completedLesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedLessonCreateManyArgs>(args?: SelectSubset<T, CompletedLessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompletedLessons and returns the data saved in the database.
     * @param {CompletedLessonCreateManyAndReturnArgs} args - Arguments to create many CompletedLessons.
     * @example
     * // Create many CompletedLessons
     * const completedLesson = await prisma.completedLesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompletedLessons and only return the `userId`
     * const completedLessonWithUserIdOnly = await prisma.completedLesson.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedLessonCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedLessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedLessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompletedLesson.
     * @param {CompletedLessonDeleteArgs} args - Arguments to delete one CompletedLesson.
     * @example
     * // Delete one CompletedLesson
     * const CompletedLesson = await prisma.completedLesson.delete({
     *   where: {
     *     // ... filter to delete one CompletedLesson
     *   }
     * })
     * 
     */
    delete<T extends CompletedLessonDeleteArgs>(args: SelectSubset<T, CompletedLessonDeleteArgs<ExtArgs>>): Prisma__CompletedLessonClient<$Result.GetResult<Prisma.$CompletedLessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompletedLesson.
     * @param {CompletedLessonUpdateArgs} args - Arguments to update one CompletedLesson.
     * @example
     * // Update one CompletedLesson
     * const completedLesson = await prisma.completedLesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedLessonUpdateArgs>(args: SelectSubset<T, CompletedLessonUpdateArgs<ExtArgs>>): Prisma__CompletedLessonClient<$Result.GetResult<Prisma.$CompletedLessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompletedLessons.
     * @param {CompletedLessonDeleteManyArgs} args - Arguments to filter CompletedLessons to delete.
     * @example
     * // Delete a few CompletedLessons
     * const { count } = await prisma.completedLesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedLessonDeleteManyArgs>(args?: SelectSubset<T, CompletedLessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedLessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedLessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedLessons
     * const completedLesson = await prisma.completedLesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedLessonUpdateManyArgs>(args: SelectSubset<T, CompletedLessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedLessons and returns the data updated in the database.
     * @param {CompletedLessonUpdateManyAndReturnArgs} args - Arguments to update many CompletedLessons.
     * @example
     * // Update many CompletedLessons
     * const completedLesson = await prisma.completedLesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompletedLessons and only return the `userId`
     * const completedLessonWithUserIdOnly = await prisma.completedLesson.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends CompletedLessonUpdateManyAndReturnArgs>(args: SelectSubset<T, CompletedLessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedLessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompletedLesson.
     * @param {CompletedLessonUpsertArgs} args - Arguments to update or create a CompletedLesson.
     * @example
     * // Update or create a CompletedLesson
     * const completedLesson = await prisma.completedLesson.upsert({
     *   create: {
     *     // ... data to create a CompletedLesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedLesson we want to update
     *   }
     * })
     */
    upsert<T extends CompletedLessonUpsertArgs>(args: SelectSubset<T, CompletedLessonUpsertArgs<ExtArgs>>): Prisma__CompletedLessonClient<$Result.GetResult<Prisma.$CompletedLessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompletedLessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedLessonCountArgs} args - Arguments to filter CompletedLessons to count.
     * @example
     * // Count the number of CompletedLessons
     * const count = await prisma.completedLesson.count({
     *   where: {
     *     // ... the filter for the CompletedLessons we want to count
     *   }
     * })
    **/
    count<T extends CompletedLessonCountArgs>(
      args?: Subset<T, CompletedLessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedLessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedLesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedLessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompletedLessonAggregateArgs>(args: Subset<T, CompletedLessonAggregateArgs>): Prisma.PrismaPromise<GetCompletedLessonAggregateType<T>>

    /**
     * Group by CompletedLesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedLessonGroupByArgs} args - Group by arguments.
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
      T extends CompletedLessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedLessonGroupByArgs['orderBy'] }
        : { orderBy?: CompletedLessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompletedLessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedLesson model
   */
  readonly fields: CompletedLessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedLesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedLessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompletedLesson model
   */
  interface CompletedLessonFieldRefs {
    readonly userId: FieldRef<"CompletedLesson", 'String'>
    readonly lessonId: FieldRef<"CompletedLesson", 'String'>
    readonly createdAt: FieldRef<"CompletedLesson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompletedLesson findUnique
   */
  export type CompletedLessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonInclude<ExtArgs> | null
    /**
     * Filter, which CompletedLesson to fetch.
     */
    where: CompletedLessonWhereUniqueInput
  }

  /**
   * CompletedLesson findUniqueOrThrow
   */
  export type CompletedLessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonInclude<ExtArgs> | null
    /**
     * Filter, which CompletedLesson to fetch.
     */
    where: CompletedLessonWhereUniqueInput
  }

  /**
   * CompletedLesson findFirst
   */
  export type CompletedLessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonInclude<ExtArgs> | null
    /**
     * Filter, which CompletedLesson to fetch.
     */
    where?: CompletedLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedLessons to fetch.
     */
    orderBy?: CompletedLessonOrderByWithRelationInput | CompletedLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedLessons.
     */
    cursor?: CompletedLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedLessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedLessons.
     */
    distinct?: CompletedLessonScalarFieldEnum | CompletedLessonScalarFieldEnum[]
  }

  /**
   * CompletedLesson findFirstOrThrow
   */
  export type CompletedLessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonInclude<ExtArgs> | null
    /**
     * Filter, which CompletedLesson to fetch.
     */
    where?: CompletedLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedLessons to fetch.
     */
    orderBy?: CompletedLessonOrderByWithRelationInput | CompletedLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedLessons.
     */
    cursor?: CompletedLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedLessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedLessons.
     */
    distinct?: CompletedLessonScalarFieldEnum | CompletedLessonScalarFieldEnum[]
  }

  /**
   * CompletedLesson findMany
   */
  export type CompletedLessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonInclude<ExtArgs> | null
    /**
     * Filter, which CompletedLessons to fetch.
     */
    where?: CompletedLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedLessons to fetch.
     */
    orderBy?: CompletedLessonOrderByWithRelationInput | CompletedLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedLessons.
     */
    cursor?: CompletedLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedLessons.
     */
    skip?: number
    distinct?: CompletedLessonScalarFieldEnum | CompletedLessonScalarFieldEnum[]
  }

  /**
   * CompletedLesson create
   */
  export type CompletedLessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonInclude<ExtArgs> | null
    /**
     * The data needed to create a CompletedLesson.
     */
    data: XOR<CompletedLessonCreateInput, CompletedLessonUncheckedCreateInput>
  }

  /**
   * CompletedLesson createMany
   */
  export type CompletedLessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedLessons.
     */
    data: CompletedLessonCreateManyInput | CompletedLessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompletedLesson createManyAndReturn
   */
  export type CompletedLessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * The data used to create many CompletedLessons.
     */
    data: CompletedLessonCreateManyInput | CompletedLessonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedLesson update
   */
  export type CompletedLessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonInclude<ExtArgs> | null
    /**
     * The data needed to update a CompletedLesson.
     */
    data: XOR<CompletedLessonUpdateInput, CompletedLessonUncheckedUpdateInput>
    /**
     * Choose, which CompletedLesson to update.
     */
    where: CompletedLessonWhereUniqueInput
  }

  /**
   * CompletedLesson updateMany
   */
  export type CompletedLessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedLessons.
     */
    data: XOR<CompletedLessonUpdateManyMutationInput, CompletedLessonUncheckedUpdateManyInput>
    /**
     * Filter which CompletedLessons to update
     */
    where?: CompletedLessonWhereInput
    /**
     * Limit how many CompletedLessons to update.
     */
    limit?: number
  }

  /**
   * CompletedLesson updateManyAndReturn
   */
  export type CompletedLessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * The data used to update CompletedLessons.
     */
    data: XOR<CompletedLessonUpdateManyMutationInput, CompletedLessonUncheckedUpdateManyInput>
    /**
     * Filter which CompletedLessons to update
     */
    where?: CompletedLessonWhereInput
    /**
     * Limit how many CompletedLessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedLesson upsert
   */
  export type CompletedLessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonInclude<ExtArgs> | null
    /**
     * The filter to search for the CompletedLesson to update in case it exists.
     */
    where: CompletedLessonWhereUniqueInput
    /**
     * In case the CompletedLesson found by the `where` argument doesn't exist, create a new CompletedLesson with this data.
     */
    create: XOR<CompletedLessonCreateInput, CompletedLessonUncheckedCreateInput>
    /**
     * In case the CompletedLesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedLessonUpdateInput, CompletedLessonUncheckedUpdateInput>
  }

  /**
   * CompletedLesson delete
   */
  export type CompletedLessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonInclude<ExtArgs> | null
    /**
     * Filter which CompletedLesson to delete.
     */
    where: CompletedLessonWhereUniqueInput
  }

  /**
   * CompletedLesson deleteMany
   */
  export type CompletedLessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedLessons to delete
     */
    where?: CompletedLessonWhereInput
    /**
     * Limit how many CompletedLessons to delete.
     */
    limit?: number
  }

  /**
   * CompletedLesson without action
   */
  export type CompletedLessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedLesson
     */
    select?: CompletedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedLesson
     */
    omit?: CompletedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedLessonInclude<ExtArgs> | null
  }


  /**
   * Model ReferralCommission
   */

  export type AggregateReferralCommission = {
    _count: ReferralCommissionCountAggregateOutputType | null
    _avg: ReferralCommissionAvgAggregateOutputType | null
    _sum: ReferralCommissionSumAggregateOutputType | null
    _min: ReferralCommissionMinAggregateOutputType | null
    _max: ReferralCommissionMaxAggregateOutputType | null
  }

  export type ReferralCommissionAvgAggregateOutputType = {
    amountInRupees: number | null
  }

  export type ReferralCommissionSumAggregateOutputType = {
    amountInRupees: number | null
  }

  export type ReferralCommissionMinAggregateOutputType = {
    id: string | null
    referrerId: string | null
    referredId: string | null
    amountInRupees: number | null
    status: $Enums.ReferralCommissionStatus | null
    createdAt: Date | null
  }

  export type ReferralCommissionMaxAggregateOutputType = {
    id: string | null
    referrerId: string | null
    referredId: string | null
    amountInRupees: number | null
    status: $Enums.ReferralCommissionStatus | null
    createdAt: Date | null
  }

  export type ReferralCommissionCountAggregateOutputType = {
    id: number
    referrerId: number
    referredId: number
    amountInRupees: number
    status: number
    createdAt: number
    _all: number
  }


  export type ReferralCommissionAvgAggregateInputType = {
    amountInRupees?: true
  }

  export type ReferralCommissionSumAggregateInputType = {
    amountInRupees?: true
  }

  export type ReferralCommissionMinAggregateInputType = {
    id?: true
    referrerId?: true
    referredId?: true
    amountInRupees?: true
    status?: true
    createdAt?: true
  }

  export type ReferralCommissionMaxAggregateInputType = {
    id?: true
    referrerId?: true
    referredId?: true
    amountInRupees?: true
    status?: true
    createdAt?: true
  }

  export type ReferralCommissionCountAggregateInputType = {
    id?: true
    referrerId?: true
    referredId?: true
    amountInRupees?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ReferralCommissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralCommission to aggregate.
     */
    where?: ReferralCommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralCommissions to fetch.
     */
    orderBy?: ReferralCommissionOrderByWithRelationInput | ReferralCommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralCommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralCommissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralCommissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferralCommissions
    **/
    _count?: true | ReferralCommissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralCommissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralCommissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralCommissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralCommissionMaxAggregateInputType
  }

  export type GetReferralCommissionAggregateType<T extends ReferralCommissionAggregateArgs> = {
        [P in keyof T & keyof AggregateReferralCommission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferralCommission[P]>
      : GetScalarType<T[P], AggregateReferralCommission[P]>
  }




  export type ReferralCommissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralCommissionWhereInput
    orderBy?: ReferralCommissionOrderByWithAggregationInput | ReferralCommissionOrderByWithAggregationInput[]
    by: ReferralCommissionScalarFieldEnum[] | ReferralCommissionScalarFieldEnum
    having?: ReferralCommissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCommissionCountAggregateInputType | true
    _avg?: ReferralCommissionAvgAggregateInputType
    _sum?: ReferralCommissionSumAggregateInputType
    _min?: ReferralCommissionMinAggregateInputType
    _max?: ReferralCommissionMaxAggregateInputType
  }

  export type ReferralCommissionGroupByOutputType = {
    id: string
    referrerId: string
    referredId: string
    amountInRupees: number
    status: $Enums.ReferralCommissionStatus
    createdAt: Date
    _count: ReferralCommissionCountAggregateOutputType | null
    _avg: ReferralCommissionAvgAggregateOutputType | null
    _sum: ReferralCommissionSumAggregateOutputType | null
    _min: ReferralCommissionMinAggregateOutputType | null
    _max: ReferralCommissionMaxAggregateOutputType | null
  }

  type GetReferralCommissionGroupByPayload<T extends ReferralCommissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralCommissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralCommissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralCommissionGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralCommissionGroupByOutputType[P]>
        }
      >
    >


  export type ReferralCommissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    amountInRupees?: boolean
    status?: boolean
    createdAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralCommission"]>

  export type ReferralCommissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    amountInRupees?: boolean
    status?: boolean
    createdAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralCommission"]>

  export type ReferralCommissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    amountInRupees?: boolean
    status?: boolean
    createdAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralCommission"]>

  export type ReferralCommissionSelectScalar = {
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    amountInRupees?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ReferralCommissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referrerId" | "referredId" | "amountInRupees" | "status" | "createdAt", ExtArgs["result"]["referralCommission"]>
  export type ReferralCommissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralCommissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralCommissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReferralCommissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReferralCommission"
    objects: {
      referrer: Prisma.$UserPayload<ExtArgs>
      referred: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referrerId: string
      referredId: string
      amountInRupees: number
      status: $Enums.ReferralCommissionStatus
      createdAt: Date
    }, ExtArgs["result"]["referralCommission"]>
    composites: {}
  }

  type ReferralCommissionGetPayload<S extends boolean | null | undefined | ReferralCommissionDefaultArgs> = $Result.GetResult<Prisma.$ReferralCommissionPayload, S>

  type ReferralCommissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralCommissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralCommissionCountAggregateInputType | true
    }

  export interface ReferralCommissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferralCommission'], meta: { name: 'ReferralCommission' } }
    /**
     * Find zero or one ReferralCommission that matches the filter.
     * @param {ReferralCommissionFindUniqueArgs} args - Arguments to find a ReferralCommission
     * @example
     * // Get one ReferralCommission
     * const referralCommission = await prisma.referralCommission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralCommissionFindUniqueArgs>(args: SelectSubset<T, ReferralCommissionFindUniqueArgs<ExtArgs>>): Prisma__ReferralCommissionClient<$Result.GetResult<Prisma.$ReferralCommissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReferralCommission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralCommissionFindUniqueOrThrowArgs} args - Arguments to find a ReferralCommission
     * @example
     * // Get one ReferralCommission
     * const referralCommission = await prisma.referralCommission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralCommissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralCommissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralCommissionClient<$Result.GetResult<Prisma.$ReferralCommissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralCommission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCommissionFindFirstArgs} args - Arguments to find a ReferralCommission
     * @example
     * // Get one ReferralCommission
     * const referralCommission = await prisma.referralCommission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralCommissionFindFirstArgs>(args?: SelectSubset<T, ReferralCommissionFindFirstArgs<ExtArgs>>): Prisma__ReferralCommissionClient<$Result.GetResult<Prisma.$ReferralCommissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralCommission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCommissionFindFirstOrThrowArgs} args - Arguments to find a ReferralCommission
     * @example
     * // Get one ReferralCommission
     * const referralCommission = await prisma.referralCommission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralCommissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralCommissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralCommissionClient<$Result.GetResult<Prisma.$ReferralCommissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReferralCommissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCommissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferralCommissions
     * const referralCommissions = await prisma.referralCommission.findMany()
     * 
     * // Get first 10 ReferralCommissions
     * const referralCommissions = await prisma.referralCommission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralCommissionWithIdOnly = await prisma.referralCommission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralCommissionFindManyArgs>(args?: SelectSubset<T, ReferralCommissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralCommissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReferralCommission.
     * @param {ReferralCommissionCreateArgs} args - Arguments to create a ReferralCommission.
     * @example
     * // Create one ReferralCommission
     * const ReferralCommission = await prisma.referralCommission.create({
     *   data: {
     *     // ... data to create a ReferralCommission
     *   }
     * })
     * 
     */
    create<T extends ReferralCommissionCreateArgs>(args: SelectSubset<T, ReferralCommissionCreateArgs<ExtArgs>>): Prisma__ReferralCommissionClient<$Result.GetResult<Prisma.$ReferralCommissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReferralCommissions.
     * @param {ReferralCommissionCreateManyArgs} args - Arguments to create many ReferralCommissions.
     * @example
     * // Create many ReferralCommissions
     * const referralCommission = await prisma.referralCommission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralCommissionCreateManyArgs>(args?: SelectSubset<T, ReferralCommissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReferralCommissions and returns the data saved in the database.
     * @param {ReferralCommissionCreateManyAndReturnArgs} args - Arguments to create many ReferralCommissions.
     * @example
     * // Create many ReferralCommissions
     * const referralCommission = await prisma.referralCommission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReferralCommissions and only return the `id`
     * const referralCommissionWithIdOnly = await prisma.referralCommission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralCommissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralCommissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralCommissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReferralCommission.
     * @param {ReferralCommissionDeleteArgs} args - Arguments to delete one ReferralCommission.
     * @example
     * // Delete one ReferralCommission
     * const ReferralCommission = await prisma.referralCommission.delete({
     *   where: {
     *     // ... filter to delete one ReferralCommission
     *   }
     * })
     * 
     */
    delete<T extends ReferralCommissionDeleteArgs>(args: SelectSubset<T, ReferralCommissionDeleteArgs<ExtArgs>>): Prisma__ReferralCommissionClient<$Result.GetResult<Prisma.$ReferralCommissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReferralCommission.
     * @param {ReferralCommissionUpdateArgs} args - Arguments to update one ReferralCommission.
     * @example
     * // Update one ReferralCommission
     * const referralCommission = await prisma.referralCommission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralCommissionUpdateArgs>(args: SelectSubset<T, ReferralCommissionUpdateArgs<ExtArgs>>): Prisma__ReferralCommissionClient<$Result.GetResult<Prisma.$ReferralCommissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReferralCommissions.
     * @param {ReferralCommissionDeleteManyArgs} args - Arguments to filter ReferralCommissions to delete.
     * @example
     * // Delete a few ReferralCommissions
     * const { count } = await prisma.referralCommission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralCommissionDeleteManyArgs>(args?: SelectSubset<T, ReferralCommissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralCommissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCommissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferralCommissions
     * const referralCommission = await prisma.referralCommission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralCommissionUpdateManyArgs>(args: SelectSubset<T, ReferralCommissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralCommissions and returns the data updated in the database.
     * @param {ReferralCommissionUpdateManyAndReturnArgs} args - Arguments to update many ReferralCommissions.
     * @example
     * // Update many ReferralCommissions
     * const referralCommission = await prisma.referralCommission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReferralCommissions and only return the `id`
     * const referralCommissionWithIdOnly = await prisma.referralCommission.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReferralCommissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferralCommissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralCommissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReferralCommission.
     * @param {ReferralCommissionUpsertArgs} args - Arguments to update or create a ReferralCommission.
     * @example
     * // Update or create a ReferralCommission
     * const referralCommission = await prisma.referralCommission.upsert({
     *   create: {
     *     // ... data to create a ReferralCommission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferralCommission we want to update
     *   }
     * })
     */
    upsert<T extends ReferralCommissionUpsertArgs>(args: SelectSubset<T, ReferralCommissionUpsertArgs<ExtArgs>>): Prisma__ReferralCommissionClient<$Result.GetResult<Prisma.$ReferralCommissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReferralCommissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCommissionCountArgs} args - Arguments to filter ReferralCommissions to count.
     * @example
     * // Count the number of ReferralCommissions
     * const count = await prisma.referralCommission.count({
     *   where: {
     *     // ... the filter for the ReferralCommissions we want to count
     *   }
     * })
    **/
    count<T extends ReferralCommissionCountArgs>(
      args?: Subset<T, ReferralCommissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCommissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferralCommission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCommissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralCommissionAggregateArgs>(args: Subset<T, ReferralCommissionAggregateArgs>): Prisma.PrismaPromise<GetReferralCommissionAggregateType<T>>

    /**
     * Group by ReferralCommission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCommissionGroupByArgs} args - Group by arguments.
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
      T extends ReferralCommissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralCommissionGroupByArgs['orderBy'] }
        : { orderBy?: ReferralCommissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferralCommissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralCommissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferralCommission model
   */
  readonly fields: ReferralCommissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferralCommission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralCommissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referrer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referred<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReferralCommission model
   */
  interface ReferralCommissionFieldRefs {
    readonly id: FieldRef<"ReferralCommission", 'String'>
    readonly referrerId: FieldRef<"ReferralCommission", 'String'>
    readonly referredId: FieldRef<"ReferralCommission", 'String'>
    readonly amountInRupees: FieldRef<"ReferralCommission", 'Int'>
    readonly status: FieldRef<"ReferralCommission", 'ReferralCommissionStatus'>
    readonly createdAt: FieldRef<"ReferralCommission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReferralCommission findUnique
   */
  export type ReferralCommissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionInclude<ExtArgs> | null
    /**
     * Filter, which ReferralCommission to fetch.
     */
    where: ReferralCommissionWhereUniqueInput
  }

  /**
   * ReferralCommission findUniqueOrThrow
   */
  export type ReferralCommissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionInclude<ExtArgs> | null
    /**
     * Filter, which ReferralCommission to fetch.
     */
    where: ReferralCommissionWhereUniqueInput
  }

  /**
   * ReferralCommission findFirst
   */
  export type ReferralCommissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionInclude<ExtArgs> | null
    /**
     * Filter, which ReferralCommission to fetch.
     */
    where?: ReferralCommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralCommissions to fetch.
     */
    orderBy?: ReferralCommissionOrderByWithRelationInput | ReferralCommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralCommissions.
     */
    cursor?: ReferralCommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralCommissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralCommissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralCommissions.
     */
    distinct?: ReferralCommissionScalarFieldEnum | ReferralCommissionScalarFieldEnum[]
  }

  /**
   * ReferralCommission findFirstOrThrow
   */
  export type ReferralCommissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionInclude<ExtArgs> | null
    /**
     * Filter, which ReferralCommission to fetch.
     */
    where?: ReferralCommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralCommissions to fetch.
     */
    orderBy?: ReferralCommissionOrderByWithRelationInput | ReferralCommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralCommissions.
     */
    cursor?: ReferralCommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralCommissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralCommissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralCommissions.
     */
    distinct?: ReferralCommissionScalarFieldEnum | ReferralCommissionScalarFieldEnum[]
  }

  /**
   * ReferralCommission findMany
   */
  export type ReferralCommissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionInclude<ExtArgs> | null
    /**
     * Filter, which ReferralCommissions to fetch.
     */
    where?: ReferralCommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralCommissions to fetch.
     */
    orderBy?: ReferralCommissionOrderByWithRelationInput | ReferralCommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferralCommissions.
     */
    cursor?: ReferralCommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralCommissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralCommissions.
     */
    skip?: number
    distinct?: ReferralCommissionScalarFieldEnum | ReferralCommissionScalarFieldEnum[]
  }

  /**
   * ReferralCommission create
   */
  export type ReferralCommissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ReferralCommission.
     */
    data: XOR<ReferralCommissionCreateInput, ReferralCommissionUncheckedCreateInput>
  }

  /**
   * ReferralCommission createMany
   */
  export type ReferralCommissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferralCommissions.
     */
    data: ReferralCommissionCreateManyInput | ReferralCommissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReferralCommission createManyAndReturn
   */
  export type ReferralCommissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * The data used to create many ReferralCommissions.
     */
    data: ReferralCommissionCreateManyInput | ReferralCommissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralCommission update
   */
  export type ReferralCommissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ReferralCommission.
     */
    data: XOR<ReferralCommissionUpdateInput, ReferralCommissionUncheckedUpdateInput>
    /**
     * Choose, which ReferralCommission to update.
     */
    where: ReferralCommissionWhereUniqueInput
  }

  /**
   * ReferralCommission updateMany
   */
  export type ReferralCommissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferralCommissions.
     */
    data: XOR<ReferralCommissionUpdateManyMutationInput, ReferralCommissionUncheckedUpdateManyInput>
    /**
     * Filter which ReferralCommissions to update
     */
    where?: ReferralCommissionWhereInput
    /**
     * Limit how many ReferralCommissions to update.
     */
    limit?: number
  }

  /**
   * ReferralCommission updateManyAndReturn
   */
  export type ReferralCommissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * The data used to update ReferralCommissions.
     */
    data: XOR<ReferralCommissionUpdateManyMutationInput, ReferralCommissionUncheckedUpdateManyInput>
    /**
     * Filter which ReferralCommissions to update
     */
    where?: ReferralCommissionWhereInput
    /**
     * Limit how many ReferralCommissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralCommission upsert
   */
  export type ReferralCommissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ReferralCommission to update in case it exists.
     */
    where: ReferralCommissionWhereUniqueInput
    /**
     * In case the ReferralCommission found by the `where` argument doesn't exist, create a new ReferralCommission with this data.
     */
    create: XOR<ReferralCommissionCreateInput, ReferralCommissionUncheckedCreateInput>
    /**
     * In case the ReferralCommission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralCommissionUpdateInput, ReferralCommissionUncheckedUpdateInput>
  }

  /**
   * ReferralCommission delete
   */
  export type ReferralCommissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionInclude<ExtArgs> | null
    /**
     * Filter which ReferralCommission to delete.
     */
    where: ReferralCommissionWhereUniqueInput
  }

  /**
   * ReferralCommission deleteMany
   */
  export type ReferralCommissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralCommissions to delete
     */
    where?: ReferralCommissionWhereInput
    /**
     * Limit how many ReferralCommissions to delete.
     */
    limit?: number
  }

  /**
   * ReferralCommission without action
   */
  export type ReferralCommissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCommission
     */
    select?: ReferralCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCommission
     */
    omit?: ReferralCommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCommissionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    twoFactorEnabled: 'twoFactorEnabled',
    role: 'role',
    referralCode: 'referralCode',
    referredById: 'referredById'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    expiresAt: 'expiresAt',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    notionDoc: 'notionDoc'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseProductScalarFieldEnum: {
    courseId: 'courseId',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseProductScalarFieldEnum = (typeof CourseProductScalarFieldEnum)[keyof typeof CourseProductScalarFieldEnum]


  export const CourseSectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    order: 'order',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseSectionScalarFieldEnum = (typeof CourseSectionScalarFieldEnum)[keyof typeof CourseSectionScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    youtubeVideoId: 'youtubeVideoId',
    order: 'order',
    status: 'status',
    sectionId: 'sectionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    priceInDollars: 'priceInDollars',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    pricePaidInCents: 'pricePaidInCents',
    productDetails: 'productDetails',
    userId: 'userId',
    productId: 'productId',
    stripeSessionId: 'stripeSessionId',
    refundedAt: 'refundedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const UserCourseAccessScalarFieldEnum: {
    userId: 'userId',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserCourseAccessScalarFieldEnum = (typeof UserCourseAccessScalarFieldEnum)[keyof typeof UserCourseAccessScalarFieldEnum]


  export const UserLessonCompleteScalarFieldEnum: {
    userId: 'userId',
    lessonId: 'lessonId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserLessonCompleteScalarFieldEnum = (typeof UserLessonCompleteScalarFieldEnum)[keyof typeof UserLessonCompleteScalarFieldEnum]


  export const CompletedLessonScalarFieldEnum: {
    userId: 'userId',
    lessonId: 'lessonId',
    createdAt: 'createdAt'
  };

  export type CompletedLessonScalarFieldEnum = (typeof CompletedLessonScalarFieldEnum)[keyof typeof CompletedLessonScalarFieldEnum]


  export const ReferralCommissionScalarFieldEnum: {
    id: 'id',
    referrerId: 'referrerId',
    referredId: 'referredId',
    amountInRupees: 'amountInRupees',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ReferralCommissionScalarFieldEnum = (typeof ReferralCommissionScalarFieldEnum)[keyof typeof ReferralCommissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'user_role[]'
   */
  export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>
    


  /**
   * Reference to a field of type 'course_section_status'
   */
  export type Enumcourse_section_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'course_section_status'>
    


  /**
   * Reference to a field of type 'course_section_status[]'
   */
  export type ListEnumcourse_section_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'course_section_status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'lesson_status'
   */
  export type Enumlesson_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'lesson_status'>
    


  /**
   * Reference to a field of type 'lesson_status[]'
   */
  export type ListEnumlesson_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'lesson_status[]'>
    


  /**
   * Reference to a field of type 'product_status'
   */
  export type Enumproduct_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'product_status'>
    


  /**
   * Reference to a field of type 'product_status[]'
   */
  export type ListEnumproduct_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'product_status[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ReferralCommissionStatus'
   */
  export type EnumReferralCommissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralCommissionStatus'>
    


  /**
   * Reference to a field of type 'ReferralCommissionStatus[]'
   */
  export type ListEnumReferralCommissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralCommissionStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    role?: Enumuser_roleFilter<"User"> | $Enums.user_role
    referralCode?: StringNullableFilter<"User"> | string | null
    referredById?: StringNullableFilter<"User"> | string | null
    Session?: SessionListRelationFilter
    Account?: AccountListRelationFilter
    Purchase?: PurchaseListRelationFilter
    UserCourseAccess?: UserCourseAccessListRelationFilter
    UserLessonComplete?: UserLessonCompleteListRelationFilter
    CompletedLesson?: CompletedLessonListRelationFilter
    referredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referrals?: UserListRelationFilter
    commissionsGiven?: ReferralCommissionListRelationFilter
    commissionsEarned?: ReferralCommissionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorEnabled?: SortOrder
    role?: SortOrder
    referralCode?: SortOrderInput | SortOrder
    referredById?: SortOrderInput | SortOrder
    Session?: SessionOrderByRelationAggregateInput
    Account?: AccountOrderByRelationAggregateInput
    Purchase?: PurchaseOrderByRelationAggregateInput
    UserCourseAccess?: UserCourseAccessOrderByRelationAggregateInput
    UserLessonComplete?: UserLessonCompleteOrderByRelationAggregateInput
    CompletedLesson?: CompletedLessonOrderByRelationAggregateInput
    referredBy?: UserOrderByWithRelationInput
    referrals?: UserOrderByRelationAggregateInput
    commissionsGiven?: ReferralCommissionOrderByRelationAggregateInput
    commissionsEarned?: ReferralCommissionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referralCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    role?: Enumuser_roleFilter<"User"> | $Enums.user_role
    referredById?: StringNullableFilter<"User"> | string | null
    Session?: SessionListRelationFilter
    Account?: AccountListRelationFilter
    Purchase?: PurchaseListRelationFilter
    UserCourseAccess?: UserCourseAccessListRelationFilter
    UserLessonComplete?: UserLessonCompleteListRelationFilter
    CompletedLesson?: CompletedLessonListRelationFilter
    referredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referrals?: UserListRelationFilter
    commissionsGiven?: ReferralCommissionListRelationFilter
    commissionsEarned?: ReferralCommissionListRelationFilter
  }, "id" | "referralCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorEnabled?: SortOrder
    role?: SortOrder
    referralCode?: SortOrderInput | SortOrder
    referredById?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    twoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    role?: Enumuser_roleWithAggregatesFilter<"User"> | $Enums.user_role
    referralCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    referredById?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    notionDoc?: StringNullableFilter<"Course"> | string | null
    courseProducts?: CourseProductListRelationFilter
    userCourseAccess?: UserCourseAccessListRelationFilter
    courseSections?: CourseSectionListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notionDoc?: SortOrderInput | SortOrder
    courseProducts?: CourseProductOrderByRelationAggregateInput
    userCourseAccess?: UserCourseAccessOrderByRelationAggregateInput
    courseSections?: CourseSectionOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    notionDoc?: StringNullableFilter<"Course"> | string | null
    courseProducts?: CourseProductListRelationFilter
    userCourseAccess?: UserCourseAccessListRelationFilter
    courseSections?: CourseSectionListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notionDoc?: SortOrderInput | SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    notionDoc?: StringNullableWithAggregatesFilter<"Course"> | string | null
  }

  export type CourseProductWhereInput = {
    AND?: CourseProductWhereInput | CourseProductWhereInput[]
    OR?: CourseProductWhereInput[]
    NOT?: CourseProductWhereInput | CourseProductWhereInput[]
    courseId?: StringFilter<"CourseProduct"> | string
    productId?: StringFilter<"CourseProduct"> | string
    createdAt?: DateTimeFilter<"CourseProduct"> | Date | string
    updatedAt?: DateTimeFilter<"CourseProduct"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type CourseProductOrderByWithRelationInput = {
    courseId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type CourseProductWhereUniqueInput = Prisma.AtLeast<{
    courseId_productId?: CourseProductCourseIdProductIdCompoundUniqueInput
    AND?: CourseProductWhereInput | CourseProductWhereInput[]
    OR?: CourseProductWhereInput[]
    NOT?: CourseProductWhereInput | CourseProductWhereInput[]
    courseId?: StringFilter<"CourseProduct"> | string
    productId?: StringFilter<"CourseProduct"> | string
    createdAt?: DateTimeFilter<"CourseProduct"> | Date | string
    updatedAt?: DateTimeFilter<"CourseProduct"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "courseId_productId">

  export type CourseProductOrderByWithAggregationInput = {
    courseId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseProductCountOrderByAggregateInput
    _max?: CourseProductMaxOrderByAggregateInput
    _min?: CourseProductMinOrderByAggregateInput
  }

  export type CourseProductScalarWhereWithAggregatesInput = {
    AND?: CourseProductScalarWhereWithAggregatesInput | CourseProductScalarWhereWithAggregatesInput[]
    OR?: CourseProductScalarWhereWithAggregatesInput[]
    NOT?: CourseProductScalarWhereWithAggregatesInput | CourseProductScalarWhereWithAggregatesInput[]
    courseId?: StringWithAggregatesFilter<"CourseProduct"> | string
    productId?: StringWithAggregatesFilter<"CourseProduct"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CourseProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseProduct"> | Date | string
  }

  export type CourseSectionWhereInput = {
    AND?: CourseSectionWhereInput | CourseSectionWhereInput[]
    OR?: CourseSectionWhereInput[]
    NOT?: CourseSectionWhereInput | CourseSectionWhereInput[]
    id?: StringFilter<"CourseSection"> | string
    name?: StringFilter<"CourseSection"> | string
    status?: Enumcourse_section_statusFilter<"CourseSection"> | $Enums.course_section_status
    order?: IntFilter<"CourseSection"> | number
    courseId?: StringFilter<"CourseSection"> | string
    createdAt?: DateTimeFilter<"CourseSection"> | Date | string
    updatedAt?: DateTimeFilter<"CourseSection"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lessons?: LessonListRelationFilter
  }

  export type CourseSectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    lessons?: LessonOrderByRelationAggregateInput
  }

  export type CourseSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseSectionWhereInput | CourseSectionWhereInput[]
    OR?: CourseSectionWhereInput[]
    NOT?: CourseSectionWhereInput | CourseSectionWhereInput[]
    name?: StringFilter<"CourseSection"> | string
    status?: Enumcourse_section_statusFilter<"CourseSection"> | $Enums.course_section_status
    order?: IntFilter<"CourseSection"> | number
    courseId?: StringFilter<"CourseSection"> | string
    createdAt?: DateTimeFilter<"CourseSection"> | Date | string
    updatedAt?: DateTimeFilter<"CourseSection"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lessons?: LessonListRelationFilter
  }, "id">

  export type CourseSectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseSectionCountOrderByAggregateInput
    _avg?: CourseSectionAvgOrderByAggregateInput
    _max?: CourseSectionMaxOrderByAggregateInput
    _min?: CourseSectionMinOrderByAggregateInput
    _sum?: CourseSectionSumOrderByAggregateInput
  }

  export type CourseSectionScalarWhereWithAggregatesInput = {
    AND?: CourseSectionScalarWhereWithAggregatesInput | CourseSectionScalarWhereWithAggregatesInput[]
    OR?: CourseSectionScalarWhereWithAggregatesInput[]
    NOT?: CourseSectionScalarWhereWithAggregatesInput | CourseSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseSection"> | string
    name?: StringWithAggregatesFilter<"CourseSection"> | string
    status?: Enumcourse_section_statusWithAggregatesFilter<"CourseSection"> | $Enums.course_section_status
    order?: IntWithAggregatesFilter<"CourseSection"> | number
    courseId?: StringWithAggregatesFilter<"CourseSection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CourseSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseSection"> | Date | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: StringFilter<"Lesson"> | string
    name?: StringFilter<"Lesson"> | string
    description?: StringNullableFilter<"Lesson"> | string | null
    youtubeVideoId?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    status?: Enumlesson_statusFilter<"Lesson"> | $Enums.lesson_status
    sectionId?: StringFilter<"Lesson"> | string
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    section?: XOR<CourseSectionScalarRelationFilter, CourseSectionWhereInput>
    userLessonsComplete?: UserLessonCompleteListRelationFilter
    CompletedLesson?: CompletedLessonListRelationFilter
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    youtubeVideoId?: SortOrder
    order?: SortOrder
    status?: SortOrder
    sectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    section?: CourseSectionOrderByWithRelationInput
    userLessonsComplete?: UserLessonCompleteOrderByRelationAggregateInput
    CompletedLesson?: CompletedLessonOrderByRelationAggregateInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    name?: StringFilter<"Lesson"> | string
    description?: StringNullableFilter<"Lesson"> | string | null
    youtubeVideoId?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    status?: Enumlesson_statusFilter<"Lesson"> | $Enums.lesson_status
    sectionId?: StringFilter<"Lesson"> | string
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    section?: XOR<CourseSectionScalarRelationFilter, CourseSectionWhereInput>
    userLessonsComplete?: UserLessonCompleteListRelationFilter
    CompletedLesson?: CompletedLessonListRelationFilter
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    youtubeVideoId?: SortOrder
    order?: SortOrder
    status?: SortOrder
    sectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lesson"> | string
    name?: StringWithAggregatesFilter<"Lesson"> | string
    description?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    youtubeVideoId?: StringWithAggregatesFilter<"Lesson"> | string
    order?: IntWithAggregatesFilter<"Lesson"> | number
    status?: Enumlesson_statusWithAggregatesFilter<"Lesson"> | $Enums.lesson_status
    sectionId?: StringWithAggregatesFilter<"Lesson"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    imageUrl?: StringFilter<"Product"> | string
    priceInDollars?: IntFilter<"Product"> | number
    status?: Enumproduct_statusFilter<"Product"> | $Enums.product_status
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    courseProducts?: CourseProductListRelationFilter
    purchases?: PurchaseListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    priceInDollars?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseProducts?: CourseProductOrderByRelationAggregateInput
    purchases?: PurchaseOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    imageUrl?: StringFilter<"Product"> | string
    priceInDollars?: IntFilter<"Product"> | number
    status?: Enumproduct_statusFilter<"Product"> | $Enums.product_status
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    courseProducts?: CourseProductListRelationFilter
    purchases?: PurchaseListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    priceInDollars?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    imageUrl?: StringWithAggregatesFilter<"Product"> | string
    priceInDollars?: IntWithAggregatesFilter<"Product"> | number
    status?: Enumproduct_statusWithAggregatesFilter<"Product"> | $Enums.product_status
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: StringFilter<"Purchase"> | string
    pricePaidInCents?: IntFilter<"Purchase"> | number
    productDetails?: JsonFilter<"Purchase">
    userId?: StringFilter<"Purchase"> | string
    productId?: StringFilter<"Purchase"> | string
    stripeSessionId?: StringFilter<"Purchase"> | string
    refundedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    pricePaidInCents?: SortOrder
    productDetails?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    stripeSessionId?: SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeSessionId?: string
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    pricePaidInCents?: IntFilter<"Purchase"> | number
    productDetails?: JsonFilter<"Purchase">
    userId?: StringFilter<"Purchase"> | string
    productId?: StringFilter<"Purchase"> | string
    refundedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "stripeSessionId">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    pricePaidInCents?: SortOrder
    productDetails?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    stripeSessionId?: SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Purchase"> | string
    pricePaidInCents?: IntWithAggregatesFilter<"Purchase"> | number
    productDetails?: JsonWithAggregatesFilter<"Purchase">
    userId?: StringWithAggregatesFilter<"Purchase"> | string
    productId?: StringWithAggregatesFilter<"Purchase"> | string
    stripeSessionId?: StringWithAggregatesFilter<"Purchase"> | string
    refundedAt?: DateTimeNullableWithAggregatesFilter<"Purchase"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
  }

  export type UserCourseAccessWhereInput = {
    AND?: UserCourseAccessWhereInput | UserCourseAccessWhereInput[]
    OR?: UserCourseAccessWhereInput[]
    NOT?: UserCourseAccessWhereInput | UserCourseAccessWhereInput[]
    userId?: StringFilter<"UserCourseAccess"> | string
    courseId?: StringFilter<"UserCourseAccess"> | string
    createdAt?: DateTimeFilter<"UserCourseAccess"> | Date | string
    updatedAt?: DateTimeFilter<"UserCourseAccess"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type UserCourseAccessOrderByWithRelationInput = {
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type UserCourseAccessWhereUniqueInput = Prisma.AtLeast<{
    userId_courseId?: UserCourseAccessUserIdCourseIdCompoundUniqueInput
    AND?: UserCourseAccessWhereInput | UserCourseAccessWhereInput[]
    OR?: UserCourseAccessWhereInput[]
    NOT?: UserCourseAccessWhereInput | UserCourseAccessWhereInput[]
    userId?: StringFilter<"UserCourseAccess"> | string
    courseId?: StringFilter<"UserCourseAccess"> | string
    createdAt?: DateTimeFilter<"UserCourseAccess"> | Date | string
    updatedAt?: DateTimeFilter<"UserCourseAccess"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "userId_courseId">

  export type UserCourseAccessOrderByWithAggregationInput = {
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCourseAccessCountOrderByAggregateInput
    _max?: UserCourseAccessMaxOrderByAggregateInput
    _min?: UserCourseAccessMinOrderByAggregateInput
  }

  export type UserCourseAccessScalarWhereWithAggregatesInput = {
    AND?: UserCourseAccessScalarWhereWithAggregatesInput | UserCourseAccessScalarWhereWithAggregatesInput[]
    OR?: UserCourseAccessScalarWhereWithAggregatesInput[]
    NOT?: UserCourseAccessScalarWhereWithAggregatesInput | UserCourseAccessScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserCourseAccess"> | string
    courseId?: StringWithAggregatesFilter<"UserCourseAccess"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCourseAccess"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCourseAccess"> | Date | string
  }

  export type UserLessonCompleteWhereInput = {
    AND?: UserLessonCompleteWhereInput | UserLessonCompleteWhereInput[]
    OR?: UserLessonCompleteWhereInput[]
    NOT?: UserLessonCompleteWhereInput | UserLessonCompleteWhereInput[]
    userId?: StringFilter<"UserLessonComplete"> | string
    lessonId?: StringFilter<"UserLessonComplete"> | string
    createdAt?: DateTimeFilter<"UserLessonComplete"> | Date | string
    updatedAt?: DateTimeFilter<"UserLessonComplete"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type UserLessonCompleteOrderByWithRelationInput = {
    userId?: SortOrder
    lessonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type UserLessonCompleteWhereUniqueInput = Prisma.AtLeast<{
    userId_lessonId?: UserLessonCompleteUserIdLessonIdCompoundUniqueInput
    AND?: UserLessonCompleteWhereInput | UserLessonCompleteWhereInput[]
    OR?: UserLessonCompleteWhereInput[]
    NOT?: UserLessonCompleteWhereInput | UserLessonCompleteWhereInput[]
    userId?: StringFilter<"UserLessonComplete"> | string
    lessonId?: StringFilter<"UserLessonComplete"> | string
    createdAt?: DateTimeFilter<"UserLessonComplete"> | Date | string
    updatedAt?: DateTimeFilter<"UserLessonComplete"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "userId_lessonId">

  export type UserLessonCompleteOrderByWithAggregationInput = {
    userId?: SortOrder
    lessonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserLessonCompleteCountOrderByAggregateInput
    _max?: UserLessonCompleteMaxOrderByAggregateInput
    _min?: UserLessonCompleteMinOrderByAggregateInput
  }

  export type UserLessonCompleteScalarWhereWithAggregatesInput = {
    AND?: UserLessonCompleteScalarWhereWithAggregatesInput | UserLessonCompleteScalarWhereWithAggregatesInput[]
    OR?: UserLessonCompleteScalarWhereWithAggregatesInput[]
    NOT?: UserLessonCompleteScalarWhereWithAggregatesInput | UserLessonCompleteScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserLessonComplete"> | string
    lessonId?: StringWithAggregatesFilter<"UserLessonComplete"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserLessonComplete"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserLessonComplete"> | Date | string
  }

  export type CompletedLessonWhereInput = {
    AND?: CompletedLessonWhereInput | CompletedLessonWhereInput[]
    OR?: CompletedLessonWhereInput[]
    NOT?: CompletedLessonWhereInput | CompletedLessonWhereInput[]
    userId?: StringFilter<"CompletedLesson"> | string
    lessonId?: StringFilter<"CompletedLesson"> | string
    createdAt?: DateTimeFilter<"CompletedLesson"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type CompletedLessonOrderByWithRelationInput = {
    userId?: SortOrder
    lessonId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type CompletedLessonWhereUniqueInput = Prisma.AtLeast<{
    userId_lessonId?: CompletedLessonUserIdLessonIdCompoundUniqueInput
    AND?: CompletedLessonWhereInput | CompletedLessonWhereInput[]
    OR?: CompletedLessonWhereInput[]
    NOT?: CompletedLessonWhereInput | CompletedLessonWhereInput[]
    userId?: StringFilter<"CompletedLesson"> | string
    lessonId?: StringFilter<"CompletedLesson"> | string
    createdAt?: DateTimeFilter<"CompletedLesson"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "userId_lessonId">

  export type CompletedLessonOrderByWithAggregationInput = {
    userId?: SortOrder
    lessonId?: SortOrder
    createdAt?: SortOrder
    _count?: CompletedLessonCountOrderByAggregateInput
    _max?: CompletedLessonMaxOrderByAggregateInput
    _min?: CompletedLessonMinOrderByAggregateInput
  }

  export type CompletedLessonScalarWhereWithAggregatesInput = {
    AND?: CompletedLessonScalarWhereWithAggregatesInput | CompletedLessonScalarWhereWithAggregatesInput[]
    OR?: CompletedLessonScalarWhereWithAggregatesInput[]
    NOT?: CompletedLessonScalarWhereWithAggregatesInput | CompletedLessonScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"CompletedLesson"> | string
    lessonId?: StringWithAggregatesFilter<"CompletedLesson"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CompletedLesson"> | Date | string
  }

  export type ReferralCommissionWhereInput = {
    AND?: ReferralCommissionWhereInput | ReferralCommissionWhereInput[]
    OR?: ReferralCommissionWhereInput[]
    NOT?: ReferralCommissionWhereInput | ReferralCommissionWhereInput[]
    id?: StringFilter<"ReferralCommission"> | string
    referrerId?: StringFilter<"ReferralCommission"> | string
    referredId?: StringFilter<"ReferralCommission"> | string
    amountInRupees?: IntFilter<"ReferralCommission"> | number
    status?: EnumReferralCommissionStatusFilter<"ReferralCommission"> | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeFilter<"ReferralCommission"> | Date | string
    referrer?: XOR<UserScalarRelationFilter, UserWhereInput>
    referred?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReferralCommissionOrderByWithRelationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    amountInRupees?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    referrer?: UserOrderByWithRelationInput
    referred?: UserOrderByWithRelationInput
  }

  export type ReferralCommissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReferralCommissionWhereInput | ReferralCommissionWhereInput[]
    OR?: ReferralCommissionWhereInput[]
    NOT?: ReferralCommissionWhereInput | ReferralCommissionWhereInput[]
    referrerId?: StringFilter<"ReferralCommission"> | string
    referredId?: StringFilter<"ReferralCommission"> | string
    amountInRupees?: IntFilter<"ReferralCommission"> | number
    status?: EnumReferralCommissionStatusFilter<"ReferralCommission"> | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeFilter<"ReferralCommission"> | Date | string
    referrer?: XOR<UserScalarRelationFilter, UserWhereInput>
    referred?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReferralCommissionOrderByWithAggregationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    amountInRupees?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ReferralCommissionCountOrderByAggregateInput
    _avg?: ReferralCommissionAvgOrderByAggregateInput
    _max?: ReferralCommissionMaxOrderByAggregateInput
    _min?: ReferralCommissionMinOrderByAggregateInput
    _sum?: ReferralCommissionSumOrderByAggregateInput
  }

  export type ReferralCommissionScalarWhereWithAggregatesInput = {
    AND?: ReferralCommissionScalarWhereWithAggregatesInput | ReferralCommissionScalarWhereWithAggregatesInput[]
    OR?: ReferralCommissionScalarWhereWithAggregatesInput[]
    NOT?: ReferralCommissionScalarWhereWithAggregatesInput | ReferralCommissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReferralCommission"> | string
    referrerId?: StringWithAggregatesFilter<"ReferralCommission"> | string
    referredId?: StringWithAggregatesFilter<"ReferralCommission"> | string
    amountInRupees?: IntWithAggregatesFilter<"ReferralCommission"> | number
    status?: EnumReferralCommissionStatusWithAggregatesFilter<"ReferralCommission"> | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeWithAggregatesFilter<"ReferralCommission"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    Session?: SessionCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    referredById?: string | null
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessUncheckedCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteUncheckedCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionUncheckedCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUncheckedUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUncheckedUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUncheckedUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    referredById?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    expiresAt?: Date | string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    user: UserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    expiresAt?: Date | string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    expiresAt?: Date | string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notionDoc?: string | null
    courseProducts?: CourseProductCreateNestedManyWithoutCourseInput
    userCourseAccess?: UserCourseAccessCreateNestedManyWithoutCourseInput
    courseSections?: CourseSectionCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notionDoc?: string | null
    courseProducts?: CourseProductUncheckedCreateNestedManyWithoutCourseInput
    userCourseAccess?: UserCourseAccessUncheckedCreateNestedManyWithoutCourseInput
    courseSections?: CourseSectionUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notionDoc?: NullableStringFieldUpdateOperationsInput | string | null
    courseProducts?: CourseProductUpdateManyWithoutCourseNestedInput
    userCourseAccess?: UserCourseAccessUpdateManyWithoutCourseNestedInput
    courseSections?: CourseSectionUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notionDoc?: NullableStringFieldUpdateOperationsInput | string | null
    courseProducts?: CourseProductUncheckedUpdateManyWithoutCourseNestedInput
    userCourseAccess?: UserCourseAccessUncheckedUpdateManyWithoutCourseNestedInput
    courseSections?: CourseSectionUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notionDoc?: string | null
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notionDoc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notionDoc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseProductCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseProductsInput
    product: ProductCreateNestedOneWithoutCourseProductsInput
  }

  export type CourseProductUncheckedCreateInput = {
    courseId: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseProductUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutCourseProductsNestedInput
  }

  export type CourseProductUncheckedUpdateInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProductCreateManyInput = {
    courseId: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseProductUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProductUncheckedUpdateManyInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseSectionCreateInput = {
    id?: string
    name: string
    status?: $Enums.course_section_status
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseSectionsInput
    lessons?: LessonCreateNestedManyWithoutSectionInput
  }

  export type CourseSectionUncheckedCreateInput = {
    id?: string
    name: string
    status?: $Enums.course_section_status
    order: number
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutSectionInput
  }

  export type CourseSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: Enumcourse_section_statusFieldUpdateOperationsInput | $Enums.course_section_status
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseSectionsNestedInput
    lessons?: LessonUpdateManyWithoutSectionNestedInput
  }

  export type CourseSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: Enumcourse_section_statusFieldUpdateOperationsInput | $Enums.course_section_status
    order?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type CourseSectionCreateManyInput = {
    id?: string
    name: string
    status?: $Enums.course_section_status
    order: number
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: Enumcourse_section_statusFieldUpdateOperationsInput | $Enums.course_section_status
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: Enumcourse_section_statusFieldUpdateOperationsInput | $Enums.course_section_status
    order?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateInput = {
    id?: string
    name: string
    description?: string | null
    youtubeVideoId: string
    order: number
    status?: $Enums.lesson_status
    createdAt?: Date | string
    updatedAt?: Date | string
    section: CourseSectionCreateNestedOneWithoutLessonsInput
    userLessonsComplete?: UserLessonCompleteCreateNestedManyWithoutLessonInput
    CompletedLesson?: CompletedLessonCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    youtubeVideoId: string
    order: number
    status?: $Enums.lesson_status
    sectionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userLessonsComplete?: UserLessonCompleteUncheckedCreateNestedManyWithoutLessonInput
    CompletedLesson?: CompletedLessonUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeVideoId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: Enumlesson_statusFieldUpdateOperationsInput | $Enums.lesson_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: CourseSectionUpdateOneRequiredWithoutLessonsNestedInput
    userLessonsComplete?: UserLessonCompleteUpdateManyWithoutLessonNestedInput
    CompletedLesson?: CompletedLessonUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeVideoId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: Enumlesson_statusFieldUpdateOperationsInput | $Enums.lesson_status
    sectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLessonsComplete?: UserLessonCompleteUncheckedUpdateManyWithoutLessonNestedInput
    CompletedLesson?: CompletedLessonUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    youtubeVideoId: string
    order: number
    status?: $Enums.lesson_status
    sectionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeVideoId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: Enumlesson_statusFieldUpdateOperationsInput | $Enums.lesson_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeVideoId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: Enumlesson_statusFieldUpdateOperationsInput | $Enums.lesson_status
    sectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    priceInDollars: number
    status?: $Enums.product_status
    createdAt?: Date | string
    updatedAt?: Date | string
    courseProducts?: CourseProductCreateNestedManyWithoutProductInput
    purchases?: PurchaseCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    priceInDollars: number
    status?: $Enums.product_status
    createdAt?: Date | string
    updatedAt?: Date | string
    courseProducts?: CourseProductUncheckedCreateNestedManyWithoutProductInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInDollars?: IntFieldUpdateOperationsInput | number
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseProducts?: CourseProductUpdateManyWithoutProductNestedInput
    purchases?: PurchaseUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInDollars?: IntFieldUpdateOperationsInput | number
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseProducts?: CourseProductUncheckedUpdateManyWithoutProductNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    priceInDollars: number
    status?: $Enums.product_status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInDollars?: IntFieldUpdateOperationsInput | number
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInDollars?: IntFieldUpdateOperationsInput | number
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateInput = {
    id?: string
    pricePaidInCents: number
    productDetails: JsonNullValueInput | InputJsonValue
    stripeSessionId: string
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPurchaseInput
    product: ProductCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: string
    pricePaidInCents: number
    productDetails: JsonNullValueInput | InputJsonValue
    userId: string
    productId: string
    stripeSessionId: string
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePaidInCents?: IntFieldUpdateOperationsInput | number
    productDetails?: JsonNullValueInput | InputJsonValue
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchaseNestedInput
    product?: ProductUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePaidInCents?: IntFieldUpdateOperationsInput | number
    productDetails?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyInput = {
    id?: string
    pricePaidInCents: number
    productDetails: JsonNullValueInput | InputJsonValue
    userId: string
    productId: string
    stripeSessionId: string
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePaidInCents?: IntFieldUpdateOperationsInput | number
    productDetails?: JsonNullValueInput | InputJsonValue
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePaidInCents?: IntFieldUpdateOperationsInput | number
    productDetails?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseAccessCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserCourseAccessInput
    course: CourseCreateNestedOneWithoutUserCourseAccessInput
  }

  export type UserCourseAccessUncheckedCreateInput = {
    userId: string
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseAccessUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserCourseAccessNestedInput
    course?: CourseUpdateOneRequiredWithoutUserCourseAccessNestedInput
  }

  export type UserCourseAccessUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseAccessCreateManyInput = {
    userId: string
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseAccessUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseAccessUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLessonCompleteCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserLessonCompleteInput
    lesson: LessonCreateNestedOneWithoutUserLessonsCompleteInput
  }

  export type UserLessonCompleteUncheckedCreateInput = {
    userId: string
    lessonId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLessonCompleteUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserLessonCompleteNestedInput
    lesson?: LessonUpdateOneRequiredWithoutUserLessonsCompleteNestedInput
  }

  export type UserLessonCompleteUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLessonCompleteCreateManyInput = {
    userId: string
    lessonId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLessonCompleteUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLessonCompleteUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedLessonCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCompletedLessonInput
    lesson: LessonCreateNestedOneWithoutCompletedLessonInput
  }

  export type CompletedLessonUncheckedCreateInput = {
    userId: string
    lessonId: string
    createdAt?: Date | string
  }

  export type CompletedLessonUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompletedLessonNestedInput
    lesson?: LessonUpdateOneRequiredWithoutCompletedLessonNestedInput
  }

  export type CompletedLessonUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedLessonCreateManyInput = {
    userId: string
    lessonId: string
    createdAt?: Date | string
  }

  export type CompletedLessonUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedLessonUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCommissionCreateInput = {
    id?: string
    amountInRupees: number
    status?: $Enums.ReferralCommissionStatus
    createdAt?: Date | string
    referrer: UserCreateNestedOneWithoutCommissionsGivenInput
    referred: UserCreateNestedOneWithoutCommissionsEarnedInput
  }

  export type ReferralCommissionUncheckedCreateInput = {
    id?: string
    referrerId: string
    referredId: string
    amountInRupees: number
    status?: $Enums.ReferralCommissionStatus
    createdAt?: Date | string
  }

  export type ReferralCommissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInRupees?: IntFieldUpdateOperationsInput | number
    status?: EnumReferralCommissionStatusFieldUpdateOperationsInput | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: UserUpdateOneRequiredWithoutCommissionsGivenNestedInput
    referred?: UserUpdateOneRequiredWithoutCommissionsEarnedNestedInput
  }

  export type ReferralCommissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    amountInRupees?: IntFieldUpdateOperationsInput | number
    status?: EnumReferralCommissionStatusFieldUpdateOperationsInput | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCommissionCreateManyInput = {
    id?: string
    referrerId: string
    referredId: string
    amountInRupees: number
    status?: $Enums.ReferralCommissionStatus
    createdAt?: Date | string
  }

  export type ReferralCommissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInRupees?: IntFieldUpdateOperationsInput | number
    status?: EnumReferralCommissionStatusFieldUpdateOperationsInput | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCommissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    amountInRupees?: IntFieldUpdateOperationsInput | number
    status?: EnumReferralCommissionStatusFieldUpdateOperationsInput | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type UserCourseAccessListRelationFilter = {
    every?: UserCourseAccessWhereInput
    some?: UserCourseAccessWhereInput
    none?: UserCourseAccessWhereInput
  }

  export type UserLessonCompleteListRelationFilter = {
    every?: UserLessonCompleteWhereInput
    some?: UserLessonCompleteWhereInput
    none?: UserLessonCompleteWhereInput
  }

  export type CompletedLessonListRelationFilter = {
    every?: CompletedLessonWhereInput
    some?: CompletedLessonWhereInput
    none?: CompletedLessonWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ReferralCommissionListRelationFilter = {
    every?: ReferralCommissionWhereInput
    some?: ReferralCommissionWhereInput
    none?: ReferralCommissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCourseAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLessonCompleteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompletedLessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralCommissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorEnabled?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredById?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorEnabled?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredById?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorEnabled?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredById?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    expiresAt?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    expiresAt?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    expiresAt?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseProductListRelationFilter = {
    every?: CourseProductWhereInput
    some?: CourseProductWhereInput
    none?: CourseProductWhereInput
  }

  export type CourseSectionListRelationFilter = {
    every?: CourseSectionWhereInput
    some?: CourseSectionWhereInput
    none?: CourseSectionWhereInput
  }

  export type CourseProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notionDoc?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notionDoc?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notionDoc?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type CourseProductCourseIdProductIdCompoundUniqueInput = {
    courseId: string
    productId: string
  }

  export type CourseProductCountOrderByAggregateInput = {
    courseId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseProductMaxOrderByAggregateInput = {
    courseId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseProductMinOrderByAggregateInput = {
    courseId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Enumcourse_section_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.course_section_status | Enumcourse_section_statusFieldRefInput<$PrismaModel>
    in?: $Enums.course_section_status[] | ListEnumcourse_section_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.course_section_status[] | ListEnumcourse_section_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumcourse_section_statusFilter<$PrismaModel> | $Enums.course_section_status
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

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseSectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSectionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CourseSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSectionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type Enumcourse_section_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.course_section_status | Enumcourse_section_statusFieldRefInput<$PrismaModel>
    in?: $Enums.course_section_status[] | ListEnumcourse_section_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.course_section_status[] | ListEnumcourse_section_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumcourse_section_statusWithAggregatesFilter<$PrismaModel> | $Enums.course_section_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcourse_section_statusFilter<$PrismaModel>
    _max?: NestedEnumcourse_section_statusFilter<$PrismaModel>
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

  export type Enumlesson_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.lesson_status | Enumlesson_statusFieldRefInput<$PrismaModel>
    in?: $Enums.lesson_status[] | ListEnumlesson_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.lesson_status[] | ListEnumlesson_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumlesson_statusFilter<$PrismaModel> | $Enums.lesson_status
  }

  export type CourseSectionScalarRelationFilter = {
    is?: CourseSectionWhereInput
    isNot?: CourseSectionWhereInput
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    youtubeVideoId?: SortOrder
    order?: SortOrder
    status?: SortOrder
    sectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    youtubeVideoId?: SortOrder
    order?: SortOrder
    status?: SortOrder
    sectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    youtubeVideoId?: SortOrder
    order?: SortOrder
    status?: SortOrder
    sectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type Enumlesson_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.lesson_status | Enumlesson_statusFieldRefInput<$PrismaModel>
    in?: $Enums.lesson_status[] | ListEnumlesson_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.lesson_status[] | ListEnumlesson_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumlesson_statusWithAggregatesFilter<$PrismaModel> | $Enums.lesson_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumlesson_statusFilter<$PrismaModel>
    _max?: NestedEnumlesson_statusFilter<$PrismaModel>
  }

  export type Enumproduct_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.product_status | Enumproduct_statusFieldRefInput<$PrismaModel>
    in?: $Enums.product_status[] | ListEnumproduct_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.product_status[] | ListEnumproduct_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumproduct_statusFilter<$PrismaModel> | $Enums.product_status
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    priceInDollars?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    priceInDollars?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    priceInDollars?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    priceInDollars?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    priceInDollars?: SortOrder
  }

  export type Enumproduct_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_status | Enumproduct_statusFieldRefInput<$PrismaModel>
    in?: $Enums.product_status[] | ListEnumproduct_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.product_status[] | ListEnumproduct_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumproduct_statusWithAggregatesFilter<$PrismaModel> | $Enums.product_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproduct_statusFilter<$PrismaModel>
    _max?: NestedEnumproduct_statusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    pricePaidInCents?: SortOrder
    productDetails?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    stripeSessionId?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    pricePaidInCents?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    pricePaidInCents?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    stripeSessionId?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    pricePaidInCents?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    stripeSessionId?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    pricePaidInCents?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserCourseAccessUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type UserCourseAccessCountOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCourseAccessMaxOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCourseAccessMinOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type UserLessonCompleteUserIdLessonIdCompoundUniqueInput = {
    userId: string
    lessonId: string
  }

  export type UserLessonCompleteCountOrderByAggregateInput = {
    userId?: SortOrder
    lessonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLessonCompleteMaxOrderByAggregateInput = {
    userId?: SortOrder
    lessonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLessonCompleteMinOrderByAggregateInput = {
    userId?: SortOrder
    lessonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletedLessonUserIdLessonIdCompoundUniqueInput = {
    userId: string
    lessonId: string
  }

  export type CompletedLessonCountOrderByAggregateInput = {
    userId?: SortOrder
    lessonId?: SortOrder
    createdAt?: SortOrder
  }

  export type CompletedLessonMaxOrderByAggregateInput = {
    userId?: SortOrder
    lessonId?: SortOrder
    createdAt?: SortOrder
  }

  export type CompletedLessonMinOrderByAggregateInput = {
    userId?: SortOrder
    lessonId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumReferralCommissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralCommissionStatus | EnumReferralCommissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralCommissionStatus[] | ListEnumReferralCommissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralCommissionStatus[] | ListEnumReferralCommissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralCommissionStatusFilter<$PrismaModel> | $Enums.ReferralCommissionStatus
  }

  export type ReferralCommissionCountOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    amountInRupees?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralCommissionAvgOrderByAggregateInput = {
    amountInRupees?: SortOrder
  }

  export type ReferralCommissionMaxOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    amountInRupees?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralCommissionMinOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    amountInRupees?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralCommissionSumOrderByAggregateInput = {
    amountInRupees?: SortOrder
  }

  export type EnumReferralCommissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralCommissionStatus | EnumReferralCommissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralCommissionStatus[] | ListEnumReferralCommissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralCommissionStatus[] | ListEnumReferralCommissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralCommissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReferralCommissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferralCommissionStatusFilter<$PrismaModel>
    _max?: NestedEnumReferralCommissionStatusFilter<$PrismaModel>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type UserCourseAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCourseAccessCreateWithoutUserInput, UserCourseAccessUncheckedCreateWithoutUserInput> | UserCourseAccessCreateWithoutUserInput[] | UserCourseAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseAccessCreateOrConnectWithoutUserInput | UserCourseAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserCourseAccessCreateManyUserInputEnvelope
    connect?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
  }

  export type UserLessonCompleteCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLessonCompleteCreateWithoutUserInput, UserLessonCompleteUncheckedCreateWithoutUserInput> | UserLessonCompleteCreateWithoutUserInput[] | UserLessonCompleteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLessonCompleteCreateOrConnectWithoutUserInput | UserLessonCompleteCreateOrConnectWithoutUserInput[]
    createMany?: UserLessonCompleteCreateManyUserInputEnvelope
    connect?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
  }

  export type CompletedLessonCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedLessonCreateWithoutUserInput, CompletedLessonUncheckedCreateWithoutUserInput> | CompletedLessonCreateWithoutUserInput[] | CompletedLessonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedLessonCreateOrConnectWithoutUserInput | CompletedLessonCreateOrConnectWithoutUserInput[]
    createMany?: CompletedLessonCreateManyUserInputEnvelope
    connect?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutReferralsInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutReferredByInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ReferralCommissionCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralCommissionCreateWithoutReferrerInput, ReferralCommissionUncheckedCreateWithoutReferrerInput> | ReferralCommissionCreateWithoutReferrerInput[] | ReferralCommissionUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralCommissionCreateOrConnectWithoutReferrerInput | ReferralCommissionCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralCommissionCreateManyReferrerInputEnvelope
    connect?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
  }

  export type ReferralCommissionCreateNestedManyWithoutReferredInput = {
    create?: XOR<ReferralCommissionCreateWithoutReferredInput, ReferralCommissionUncheckedCreateWithoutReferredInput> | ReferralCommissionCreateWithoutReferredInput[] | ReferralCommissionUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralCommissionCreateOrConnectWithoutReferredInput | ReferralCommissionCreateOrConnectWithoutReferredInput[]
    createMany?: ReferralCommissionCreateManyReferredInputEnvelope
    connect?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type UserCourseAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCourseAccessCreateWithoutUserInput, UserCourseAccessUncheckedCreateWithoutUserInput> | UserCourseAccessCreateWithoutUserInput[] | UserCourseAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseAccessCreateOrConnectWithoutUserInput | UserCourseAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserCourseAccessCreateManyUserInputEnvelope
    connect?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
  }

  export type UserLessonCompleteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLessonCompleteCreateWithoutUserInput, UserLessonCompleteUncheckedCreateWithoutUserInput> | UserLessonCompleteCreateWithoutUserInput[] | UserLessonCompleteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLessonCompleteCreateOrConnectWithoutUserInput | UserLessonCompleteCreateOrConnectWithoutUserInput[]
    createMany?: UserLessonCompleteCreateManyUserInputEnvelope
    connect?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
  }

  export type CompletedLessonUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedLessonCreateWithoutUserInput, CompletedLessonUncheckedCreateWithoutUserInput> | CompletedLessonCreateWithoutUserInput[] | CompletedLessonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedLessonCreateOrConnectWithoutUserInput | CompletedLessonCreateOrConnectWithoutUserInput[]
    createMany?: CompletedLessonCreateManyUserInputEnvelope
    connect?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReferredByInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ReferralCommissionUncheckedCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralCommissionCreateWithoutReferrerInput, ReferralCommissionUncheckedCreateWithoutReferrerInput> | ReferralCommissionCreateWithoutReferrerInput[] | ReferralCommissionUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralCommissionCreateOrConnectWithoutReferrerInput | ReferralCommissionCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralCommissionCreateManyReferrerInputEnvelope
    connect?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
  }

  export type ReferralCommissionUncheckedCreateNestedManyWithoutReferredInput = {
    create?: XOR<ReferralCommissionCreateWithoutReferredInput, ReferralCommissionUncheckedCreateWithoutReferredInput> | ReferralCommissionCreateWithoutReferredInput[] | ReferralCommissionUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralCommissionCreateOrConnectWithoutReferredInput | ReferralCommissionCreateOrConnectWithoutReferredInput[]
    createMany?: ReferralCommissionCreateManyReferredInputEnvelope
    connect?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type UserCourseAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCourseAccessCreateWithoutUserInput, UserCourseAccessUncheckedCreateWithoutUserInput> | UserCourseAccessCreateWithoutUserInput[] | UserCourseAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseAccessCreateOrConnectWithoutUserInput | UserCourseAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserCourseAccessUpsertWithWhereUniqueWithoutUserInput | UserCourseAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCourseAccessCreateManyUserInputEnvelope
    set?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    disconnect?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    delete?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    connect?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    update?: UserCourseAccessUpdateWithWhereUniqueWithoutUserInput | UserCourseAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCourseAccessUpdateManyWithWhereWithoutUserInput | UserCourseAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCourseAccessScalarWhereInput | UserCourseAccessScalarWhereInput[]
  }

  export type UserLessonCompleteUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLessonCompleteCreateWithoutUserInput, UserLessonCompleteUncheckedCreateWithoutUserInput> | UserLessonCompleteCreateWithoutUserInput[] | UserLessonCompleteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLessonCompleteCreateOrConnectWithoutUserInput | UserLessonCompleteCreateOrConnectWithoutUserInput[]
    upsert?: UserLessonCompleteUpsertWithWhereUniqueWithoutUserInput | UserLessonCompleteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLessonCompleteCreateManyUserInputEnvelope
    set?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    disconnect?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    delete?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    connect?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    update?: UserLessonCompleteUpdateWithWhereUniqueWithoutUserInput | UserLessonCompleteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLessonCompleteUpdateManyWithWhereWithoutUserInput | UserLessonCompleteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLessonCompleteScalarWhereInput | UserLessonCompleteScalarWhereInput[]
  }

  export type CompletedLessonUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedLessonCreateWithoutUserInput, CompletedLessonUncheckedCreateWithoutUserInput> | CompletedLessonCreateWithoutUserInput[] | CompletedLessonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedLessonCreateOrConnectWithoutUserInput | CompletedLessonCreateOrConnectWithoutUserInput[]
    upsert?: CompletedLessonUpsertWithWhereUniqueWithoutUserInput | CompletedLessonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedLessonCreateManyUserInputEnvelope
    set?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    disconnect?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    delete?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    connect?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    update?: CompletedLessonUpdateWithWhereUniqueWithoutUserInput | CompletedLessonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedLessonUpdateManyWithWhereWithoutUserInput | CompletedLessonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedLessonScalarWhereInput | CompletedLessonScalarWhereInput[]
  }

  export type UserUpdateOneWithoutReferralsNestedInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    upsert?: UserUpsertWithoutReferralsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralsInput, UserUpdateWithoutReferralsInput>, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByInput | UserUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByInput | UserUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByInput | UserUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ReferralCommissionUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralCommissionCreateWithoutReferrerInput, ReferralCommissionUncheckedCreateWithoutReferrerInput> | ReferralCommissionCreateWithoutReferrerInput[] | ReferralCommissionUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralCommissionCreateOrConnectWithoutReferrerInput | ReferralCommissionCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralCommissionUpsertWithWhereUniqueWithoutReferrerInput | ReferralCommissionUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralCommissionCreateManyReferrerInputEnvelope
    set?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    disconnect?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    delete?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    connect?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    update?: ReferralCommissionUpdateWithWhereUniqueWithoutReferrerInput | ReferralCommissionUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralCommissionUpdateManyWithWhereWithoutReferrerInput | ReferralCommissionUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralCommissionScalarWhereInput | ReferralCommissionScalarWhereInput[]
  }

  export type ReferralCommissionUpdateManyWithoutReferredNestedInput = {
    create?: XOR<ReferralCommissionCreateWithoutReferredInput, ReferralCommissionUncheckedCreateWithoutReferredInput> | ReferralCommissionCreateWithoutReferredInput[] | ReferralCommissionUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralCommissionCreateOrConnectWithoutReferredInput | ReferralCommissionCreateOrConnectWithoutReferredInput[]
    upsert?: ReferralCommissionUpsertWithWhereUniqueWithoutReferredInput | ReferralCommissionUpsertWithWhereUniqueWithoutReferredInput[]
    createMany?: ReferralCommissionCreateManyReferredInputEnvelope
    set?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    disconnect?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    delete?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    connect?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    update?: ReferralCommissionUpdateWithWhereUniqueWithoutReferredInput | ReferralCommissionUpdateWithWhereUniqueWithoutReferredInput[]
    updateMany?: ReferralCommissionUpdateManyWithWhereWithoutReferredInput | ReferralCommissionUpdateManyWithWhereWithoutReferredInput[]
    deleteMany?: ReferralCommissionScalarWhereInput | ReferralCommissionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type UserCourseAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCourseAccessCreateWithoutUserInput, UserCourseAccessUncheckedCreateWithoutUserInput> | UserCourseAccessCreateWithoutUserInput[] | UserCourseAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseAccessCreateOrConnectWithoutUserInput | UserCourseAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserCourseAccessUpsertWithWhereUniqueWithoutUserInput | UserCourseAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCourseAccessCreateManyUserInputEnvelope
    set?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    disconnect?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    delete?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    connect?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    update?: UserCourseAccessUpdateWithWhereUniqueWithoutUserInput | UserCourseAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCourseAccessUpdateManyWithWhereWithoutUserInput | UserCourseAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCourseAccessScalarWhereInput | UserCourseAccessScalarWhereInput[]
  }

  export type UserLessonCompleteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLessonCompleteCreateWithoutUserInput, UserLessonCompleteUncheckedCreateWithoutUserInput> | UserLessonCompleteCreateWithoutUserInput[] | UserLessonCompleteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLessonCompleteCreateOrConnectWithoutUserInput | UserLessonCompleteCreateOrConnectWithoutUserInput[]
    upsert?: UserLessonCompleteUpsertWithWhereUniqueWithoutUserInput | UserLessonCompleteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLessonCompleteCreateManyUserInputEnvelope
    set?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    disconnect?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    delete?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    connect?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    update?: UserLessonCompleteUpdateWithWhereUniqueWithoutUserInput | UserLessonCompleteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLessonCompleteUpdateManyWithWhereWithoutUserInput | UserLessonCompleteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLessonCompleteScalarWhereInput | UserLessonCompleteScalarWhereInput[]
  }

  export type CompletedLessonUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedLessonCreateWithoutUserInput, CompletedLessonUncheckedCreateWithoutUserInput> | CompletedLessonCreateWithoutUserInput[] | CompletedLessonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedLessonCreateOrConnectWithoutUserInput | CompletedLessonCreateOrConnectWithoutUserInput[]
    upsert?: CompletedLessonUpsertWithWhereUniqueWithoutUserInput | CompletedLessonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedLessonCreateManyUserInputEnvelope
    set?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    disconnect?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    delete?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    connect?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    update?: CompletedLessonUpdateWithWhereUniqueWithoutUserInput | CompletedLessonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedLessonUpdateManyWithWhereWithoutUserInput | CompletedLessonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedLessonScalarWhereInput | CompletedLessonScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByInput | UserUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByInput | UserUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByInput | UserUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ReferralCommissionUncheckedUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralCommissionCreateWithoutReferrerInput, ReferralCommissionUncheckedCreateWithoutReferrerInput> | ReferralCommissionCreateWithoutReferrerInput[] | ReferralCommissionUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralCommissionCreateOrConnectWithoutReferrerInput | ReferralCommissionCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralCommissionUpsertWithWhereUniqueWithoutReferrerInput | ReferralCommissionUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralCommissionCreateManyReferrerInputEnvelope
    set?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    disconnect?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    delete?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    connect?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    update?: ReferralCommissionUpdateWithWhereUniqueWithoutReferrerInput | ReferralCommissionUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralCommissionUpdateManyWithWhereWithoutReferrerInput | ReferralCommissionUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralCommissionScalarWhereInput | ReferralCommissionScalarWhereInput[]
  }

  export type ReferralCommissionUncheckedUpdateManyWithoutReferredNestedInput = {
    create?: XOR<ReferralCommissionCreateWithoutReferredInput, ReferralCommissionUncheckedCreateWithoutReferredInput> | ReferralCommissionCreateWithoutReferredInput[] | ReferralCommissionUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralCommissionCreateOrConnectWithoutReferredInput | ReferralCommissionCreateOrConnectWithoutReferredInput[]
    upsert?: ReferralCommissionUpsertWithWhereUniqueWithoutReferredInput | ReferralCommissionUpsertWithWhereUniqueWithoutReferredInput[]
    createMany?: ReferralCommissionCreateManyReferredInputEnvelope
    set?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    disconnect?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    delete?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    connect?: ReferralCommissionWhereUniqueInput | ReferralCommissionWhereUniqueInput[]
    update?: ReferralCommissionUpdateWithWhereUniqueWithoutReferredInput | ReferralCommissionUpdateWithWhereUniqueWithoutReferredInput[]
    updateMany?: ReferralCommissionUpdateManyWithWhereWithoutReferredInput | ReferralCommissionUpdateManyWithWhereWithoutReferredInput[]
    deleteMany?: ReferralCommissionScalarWhereInput | ReferralCommissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type CourseProductCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseProductCreateWithoutCourseInput, CourseProductUncheckedCreateWithoutCourseInput> | CourseProductCreateWithoutCourseInput[] | CourseProductUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseProductCreateOrConnectWithoutCourseInput | CourseProductCreateOrConnectWithoutCourseInput[]
    createMany?: CourseProductCreateManyCourseInputEnvelope
    connect?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
  }

  export type UserCourseAccessCreateNestedManyWithoutCourseInput = {
    create?: XOR<UserCourseAccessCreateWithoutCourseInput, UserCourseAccessUncheckedCreateWithoutCourseInput> | UserCourseAccessCreateWithoutCourseInput[] | UserCourseAccessUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseAccessCreateOrConnectWithoutCourseInput | UserCourseAccessCreateOrConnectWithoutCourseInput[]
    createMany?: UserCourseAccessCreateManyCourseInputEnvelope
    connect?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
  }

  export type CourseSectionCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseSectionCreateWithoutCourseInput, CourseSectionUncheckedCreateWithoutCourseInput> | CourseSectionCreateWithoutCourseInput[] | CourseSectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseSectionCreateOrConnectWithoutCourseInput | CourseSectionCreateOrConnectWithoutCourseInput[]
    createMany?: CourseSectionCreateManyCourseInputEnvelope
    connect?: CourseSectionWhereUniqueInput | CourseSectionWhereUniqueInput[]
  }

  export type CourseProductUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseProductCreateWithoutCourseInput, CourseProductUncheckedCreateWithoutCourseInput> | CourseProductCreateWithoutCourseInput[] | CourseProductUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseProductCreateOrConnectWithoutCourseInput | CourseProductCreateOrConnectWithoutCourseInput[]
    createMany?: CourseProductCreateManyCourseInputEnvelope
    connect?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
  }

  export type UserCourseAccessUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<UserCourseAccessCreateWithoutCourseInput, UserCourseAccessUncheckedCreateWithoutCourseInput> | UserCourseAccessCreateWithoutCourseInput[] | UserCourseAccessUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseAccessCreateOrConnectWithoutCourseInput | UserCourseAccessCreateOrConnectWithoutCourseInput[]
    createMany?: UserCourseAccessCreateManyCourseInputEnvelope
    connect?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
  }

  export type CourseSectionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseSectionCreateWithoutCourseInput, CourseSectionUncheckedCreateWithoutCourseInput> | CourseSectionCreateWithoutCourseInput[] | CourseSectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseSectionCreateOrConnectWithoutCourseInput | CourseSectionCreateOrConnectWithoutCourseInput[]
    createMany?: CourseSectionCreateManyCourseInputEnvelope
    connect?: CourseSectionWhereUniqueInput | CourseSectionWhereUniqueInput[]
  }

  export type CourseProductUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseProductCreateWithoutCourseInput, CourseProductUncheckedCreateWithoutCourseInput> | CourseProductCreateWithoutCourseInput[] | CourseProductUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseProductCreateOrConnectWithoutCourseInput | CourseProductCreateOrConnectWithoutCourseInput[]
    upsert?: CourseProductUpsertWithWhereUniqueWithoutCourseInput | CourseProductUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseProductCreateManyCourseInputEnvelope
    set?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    disconnect?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    delete?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    connect?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    update?: CourseProductUpdateWithWhereUniqueWithoutCourseInput | CourseProductUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseProductUpdateManyWithWhereWithoutCourseInput | CourseProductUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseProductScalarWhereInput | CourseProductScalarWhereInput[]
  }

  export type UserCourseAccessUpdateManyWithoutCourseNestedInput = {
    create?: XOR<UserCourseAccessCreateWithoutCourseInput, UserCourseAccessUncheckedCreateWithoutCourseInput> | UserCourseAccessCreateWithoutCourseInput[] | UserCourseAccessUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseAccessCreateOrConnectWithoutCourseInput | UserCourseAccessCreateOrConnectWithoutCourseInput[]
    upsert?: UserCourseAccessUpsertWithWhereUniqueWithoutCourseInput | UserCourseAccessUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: UserCourseAccessCreateManyCourseInputEnvelope
    set?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    disconnect?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    delete?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    connect?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    update?: UserCourseAccessUpdateWithWhereUniqueWithoutCourseInput | UserCourseAccessUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: UserCourseAccessUpdateManyWithWhereWithoutCourseInput | UserCourseAccessUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: UserCourseAccessScalarWhereInput | UserCourseAccessScalarWhereInput[]
  }

  export type CourseSectionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseSectionCreateWithoutCourseInput, CourseSectionUncheckedCreateWithoutCourseInput> | CourseSectionCreateWithoutCourseInput[] | CourseSectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseSectionCreateOrConnectWithoutCourseInput | CourseSectionCreateOrConnectWithoutCourseInput[]
    upsert?: CourseSectionUpsertWithWhereUniqueWithoutCourseInput | CourseSectionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseSectionCreateManyCourseInputEnvelope
    set?: CourseSectionWhereUniqueInput | CourseSectionWhereUniqueInput[]
    disconnect?: CourseSectionWhereUniqueInput | CourseSectionWhereUniqueInput[]
    delete?: CourseSectionWhereUniqueInput | CourseSectionWhereUniqueInput[]
    connect?: CourseSectionWhereUniqueInput | CourseSectionWhereUniqueInput[]
    update?: CourseSectionUpdateWithWhereUniqueWithoutCourseInput | CourseSectionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseSectionUpdateManyWithWhereWithoutCourseInput | CourseSectionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseSectionScalarWhereInput | CourseSectionScalarWhereInput[]
  }

  export type CourseProductUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseProductCreateWithoutCourseInput, CourseProductUncheckedCreateWithoutCourseInput> | CourseProductCreateWithoutCourseInput[] | CourseProductUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseProductCreateOrConnectWithoutCourseInput | CourseProductCreateOrConnectWithoutCourseInput[]
    upsert?: CourseProductUpsertWithWhereUniqueWithoutCourseInput | CourseProductUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseProductCreateManyCourseInputEnvelope
    set?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    disconnect?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    delete?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    connect?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    update?: CourseProductUpdateWithWhereUniqueWithoutCourseInput | CourseProductUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseProductUpdateManyWithWhereWithoutCourseInput | CourseProductUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseProductScalarWhereInput | CourseProductScalarWhereInput[]
  }

  export type UserCourseAccessUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<UserCourseAccessCreateWithoutCourseInput, UserCourseAccessUncheckedCreateWithoutCourseInput> | UserCourseAccessCreateWithoutCourseInput[] | UserCourseAccessUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseAccessCreateOrConnectWithoutCourseInput | UserCourseAccessCreateOrConnectWithoutCourseInput[]
    upsert?: UserCourseAccessUpsertWithWhereUniqueWithoutCourseInput | UserCourseAccessUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: UserCourseAccessCreateManyCourseInputEnvelope
    set?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    disconnect?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    delete?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    connect?: UserCourseAccessWhereUniqueInput | UserCourseAccessWhereUniqueInput[]
    update?: UserCourseAccessUpdateWithWhereUniqueWithoutCourseInput | UserCourseAccessUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: UserCourseAccessUpdateManyWithWhereWithoutCourseInput | UserCourseAccessUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: UserCourseAccessScalarWhereInput | UserCourseAccessScalarWhereInput[]
  }

  export type CourseSectionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseSectionCreateWithoutCourseInput, CourseSectionUncheckedCreateWithoutCourseInput> | CourseSectionCreateWithoutCourseInput[] | CourseSectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseSectionCreateOrConnectWithoutCourseInput | CourseSectionCreateOrConnectWithoutCourseInput[]
    upsert?: CourseSectionUpsertWithWhereUniqueWithoutCourseInput | CourseSectionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseSectionCreateManyCourseInputEnvelope
    set?: CourseSectionWhereUniqueInput | CourseSectionWhereUniqueInput[]
    disconnect?: CourseSectionWhereUniqueInput | CourseSectionWhereUniqueInput[]
    delete?: CourseSectionWhereUniqueInput | CourseSectionWhereUniqueInput[]
    connect?: CourseSectionWhereUniqueInput | CourseSectionWhereUniqueInput[]
    update?: CourseSectionUpdateWithWhereUniqueWithoutCourseInput | CourseSectionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseSectionUpdateManyWithWhereWithoutCourseInput | CourseSectionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseSectionScalarWhereInput | CourseSectionScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutCourseProductsInput = {
    create?: XOR<CourseCreateWithoutCourseProductsInput, CourseUncheckedCreateWithoutCourseProductsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseProductsInput
    connect?: CourseWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCourseProductsInput = {
    create?: XOR<ProductCreateWithoutCourseProductsInput, ProductUncheckedCreateWithoutCourseProductsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCourseProductsInput
    connect?: ProductWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutCourseProductsNestedInput = {
    create?: XOR<CourseCreateWithoutCourseProductsInput, CourseUncheckedCreateWithoutCourseProductsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseProductsInput
    upsert?: CourseUpsertWithoutCourseProductsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseProductsInput, CourseUpdateWithoutCourseProductsInput>, CourseUncheckedUpdateWithoutCourseProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutCourseProductsNestedInput = {
    create?: XOR<ProductCreateWithoutCourseProductsInput, ProductUncheckedCreateWithoutCourseProductsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCourseProductsInput
    upsert?: ProductUpsertWithoutCourseProductsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCourseProductsInput, ProductUpdateWithoutCourseProductsInput>, ProductUncheckedUpdateWithoutCourseProductsInput>
  }

  export type CourseCreateNestedOneWithoutCourseSectionsInput = {
    create?: XOR<CourseCreateWithoutCourseSectionsInput, CourseUncheckedCreateWithoutCourseSectionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseSectionsInput
    connect?: CourseWhereUniqueInput
  }

  export type LessonCreateNestedManyWithoutSectionInput = {
    create?: XOR<LessonCreateWithoutSectionInput, LessonUncheckedCreateWithoutSectionInput> | LessonCreateWithoutSectionInput[] | LessonUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutSectionInput | LessonCreateOrConnectWithoutSectionInput[]
    createMany?: LessonCreateManySectionInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<LessonCreateWithoutSectionInput, LessonUncheckedCreateWithoutSectionInput> | LessonCreateWithoutSectionInput[] | LessonUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutSectionInput | LessonCreateOrConnectWithoutSectionInput[]
    createMany?: LessonCreateManySectionInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type Enumcourse_section_statusFieldUpdateOperationsInput = {
    set?: $Enums.course_section_status
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateOneRequiredWithoutCourseSectionsNestedInput = {
    create?: XOR<CourseCreateWithoutCourseSectionsInput, CourseUncheckedCreateWithoutCourseSectionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseSectionsInput
    upsert?: CourseUpsertWithoutCourseSectionsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseSectionsInput, CourseUpdateWithoutCourseSectionsInput>, CourseUncheckedUpdateWithoutCourseSectionsInput>
  }

  export type LessonUpdateManyWithoutSectionNestedInput = {
    create?: XOR<LessonCreateWithoutSectionInput, LessonUncheckedCreateWithoutSectionInput> | LessonCreateWithoutSectionInput[] | LessonUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutSectionInput | LessonCreateOrConnectWithoutSectionInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutSectionInput | LessonUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: LessonCreateManySectionInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutSectionInput | LessonUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutSectionInput | LessonUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<LessonCreateWithoutSectionInput, LessonUncheckedCreateWithoutSectionInput> | LessonCreateWithoutSectionInput[] | LessonUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutSectionInput | LessonCreateOrConnectWithoutSectionInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutSectionInput | LessonUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: LessonCreateManySectionInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutSectionInput | LessonUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutSectionInput | LessonUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type CourseSectionCreateNestedOneWithoutLessonsInput = {
    create?: XOR<CourseSectionCreateWithoutLessonsInput, CourseSectionUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseSectionCreateOrConnectWithoutLessonsInput
    connect?: CourseSectionWhereUniqueInput
  }

  export type UserLessonCompleteCreateNestedManyWithoutLessonInput = {
    create?: XOR<UserLessonCompleteCreateWithoutLessonInput, UserLessonCompleteUncheckedCreateWithoutLessonInput> | UserLessonCompleteCreateWithoutLessonInput[] | UserLessonCompleteUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: UserLessonCompleteCreateOrConnectWithoutLessonInput | UserLessonCompleteCreateOrConnectWithoutLessonInput[]
    createMany?: UserLessonCompleteCreateManyLessonInputEnvelope
    connect?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
  }

  export type CompletedLessonCreateNestedManyWithoutLessonInput = {
    create?: XOR<CompletedLessonCreateWithoutLessonInput, CompletedLessonUncheckedCreateWithoutLessonInput> | CompletedLessonCreateWithoutLessonInput[] | CompletedLessonUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: CompletedLessonCreateOrConnectWithoutLessonInput | CompletedLessonCreateOrConnectWithoutLessonInput[]
    createMany?: CompletedLessonCreateManyLessonInputEnvelope
    connect?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
  }

  export type UserLessonCompleteUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<UserLessonCompleteCreateWithoutLessonInput, UserLessonCompleteUncheckedCreateWithoutLessonInput> | UserLessonCompleteCreateWithoutLessonInput[] | UserLessonCompleteUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: UserLessonCompleteCreateOrConnectWithoutLessonInput | UserLessonCompleteCreateOrConnectWithoutLessonInput[]
    createMany?: UserLessonCompleteCreateManyLessonInputEnvelope
    connect?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
  }

  export type CompletedLessonUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<CompletedLessonCreateWithoutLessonInput, CompletedLessonUncheckedCreateWithoutLessonInput> | CompletedLessonCreateWithoutLessonInput[] | CompletedLessonUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: CompletedLessonCreateOrConnectWithoutLessonInput | CompletedLessonCreateOrConnectWithoutLessonInput[]
    createMany?: CompletedLessonCreateManyLessonInputEnvelope
    connect?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
  }

  export type Enumlesson_statusFieldUpdateOperationsInput = {
    set?: $Enums.lesson_status
  }

  export type CourseSectionUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<CourseSectionCreateWithoutLessonsInput, CourseSectionUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseSectionCreateOrConnectWithoutLessonsInput
    upsert?: CourseSectionUpsertWithoutLessonsInput
    connect?: CourseSectionWhereUniqueInput
    update?: XOR<XOR<CourseSectionUpdateToOneWithWhereWithoutLessonsInput, CourseSectionUpdateWithoutLessonsInput>, CourseSectionUncheckedUpdateWithoutLessonsInput>
  }

  export type UserLessonCompleteUpdateManyWithoutLessonNestedInput = {
    create?: XOR<UserLessonCompleteCreateWithoutLessonInput, UserLessonCompleteUncheckedCreateWithoutLessonInput> | UserLessonCompleteCreateWithoutLessonInput[] | UserLessonCompleteUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: UserLessonCompleteCreateOrConnectWithoutLessonInput | UserLessonCompleteCreateOrConnectWithoutLessonInput[]
    upsert?: UserLessonCompleteUpsertWithWhereUniqueWithoutLessonInput | UserLessonCompleteUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: UserLessonCompleteCreateManyLessonInputEnvelope
    set?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    disconnect?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    delete?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    connect?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    update?: UserLessonCompleteUpdateWithWhereUniqueWithoutLessonInput | UserLessonCompleteUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: UserLessonCompleteUpdateManyWithWhereWithoutLessonInput | UserLessonCompleteUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: UserLessonCompleteScalarWhereInput | UserLessonCompleteScalarWhereInput[]
  }

  export type CompletedLessonUpdateManyWithoutLessonNestedInput = {
    create?: XOR<CompletedLessonCreateWithoutLessonInput, CompletedLessonUncheckedCreateWithoutLessonInput> | CompletedLessonCreateWithoutLessonInput[] | CompletedLessonUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: CompletedLessonCreateOrConnectWithoutLessonInput | CompletedLessonCreateOrConnectWithoutLessonInput[]
    upsert?: CompletedLessonUpsertWithWhereUniqueWithoutLessonInput | CompletedLessonUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: CompletedLessonCreateManyLessonInputEnvelope
    set?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    disconnect?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    delete?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    connect?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    update?: CompletedLessonUpdateWithWhereUniqueWithoutLessonInput | CompletedLessonUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: CompletedLessonUpdateManyWithWhereWithoutLessonInput | CompletedLessonUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: CompletedLessonScalarWhereInput | CompletedLessonScalarWhereInput[]
  }

  export type UserLessonCompleteUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<UserLessonCompleteCreateWithoutLessonInput, UserLessonCompleteUncheckedCreateWithoutLessonInput> | UserLessonCompleteCreateWithoutLessonInput[] | UserLessonCompleteUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: UserLessonCompleteCreateOrConnectWithoutLessonInput | UserLessonCompleteCreateOrConnectWithoutLessonInput[]
    upsert?: UserLessonCompleteUpsertWithWhereUniqueWithoutLessonInput | UserLessonCompleteUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: UserLessonCompleteCreateManyLessonInputEnvelope
    set?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    disconnect?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    delete?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    connect?: UserLessonCompleteWhereUniqueInput | UserLessonCompleteWhereUniqueInput[]
    update?: UserLessonCompleteUpdateWithWhereUniqueWithoutLessonInput | UserLessonCompleteUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: UserLessonCompleteUpdateManyWithWhereWithoutLessonInput | UserLessonCompleteUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: UserLessonCompleteScalarWhereInput | UserLessonCompleteScalarWhereInput[]
  }

  export type CompletedLessonUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<CompletedLessonCreateWithoutLessonInput, CompletedLessonUncheckedCreateWithoutLessonInput> | CompletedLessonCreateWithoutLessonInput[] | CompletedLessonUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: CompletedLessonCreateOrConnectWithoutLessonInput | CompletedLessonCreateOrConnectWithoutLessonInput[]
    upsert?: CompletedLessonUpsertWithWhereUniqueWithoutLessonInput | CompletedLessonUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: CompletedLessonCreateManyLessonInputEnvelope
    set?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    disconnect?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    delete?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    connect?: CompletedLessonWhereUniqueInput | CompletedLessonWhereUniqueInput[]
    update?: CompletedLessonUpdateWithWhereUniqueWithoutLessonInput | CompletedLessonUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: CompletedLessonUpdateManyWithWhereWithoutLessonInput | CompletedLessonUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: CompletedLessonScalarWhereInput | CompletedLessonScalarWhereInput[]
  }

  export type CourseProductCreateNestedManyWithoutProductInput = {
    create?: XOR<CourseProductCreateWithoutProductInput, CourseProductUncheckedCreateWithoutProductInput> | CourseProductCreateWithoutProductInput[] | CourseProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CourseProductCreateOrConnectWithoutProductInput | CourseProductCreateOrConnectWithoutProductInput[]
    createMany?: CourseProductCreateManyProductInputEnvelope
    connect?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchaseCreateWithoutProductInput, PurchaseUncheckedCreateWithoutProductInput> | PurchaseCreateWithoutProductInput[] | PurchaseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutProductInput | PurchaseCreateOrConnectWithoutProductInput[]
    createMany?: PurchaseCreateManyProductInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type CourseProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CourseProductCreateWithoutProductInput, CourseProductUncheckedCreateWithoutProductInput> | CourseProductCreateWithoutProductInput[] | CourseProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CourseProductCreateOrConnectWithoutProductInput | CourseProductCreateOrConnectWithoutProductInput[]
    createMany?: CourseProductCreateManyProductInputEnvelope
    connect?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchaseCreateWithoutProductInput, PurchaseUncheckedCreateWithoutProductInput> | PurchaseCreateWithoutProductInput[] | PurchaseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutProductInput | PurchaseCreateOrConnectWithoutProductInput[]
    createMany?: PurchaseCreateManyProductInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type Enumproduct_statusFieldUpdateOperationsInput = {
    set?: $Enums.product_status
  }

  export type CourseProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<CourseProductCreateWithoutProductInput, CourseProductUncheckedCreateWithoutProductInput> | CourseProductCreateWithoutProductInput[] | CourseProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CourseProductCreateOrConnectWithoutProductInput | CourseProductCreateOrConnectWithoutProductInput[]
    upsert?: CourseProductUpsertWithWhereUniqueWithoutProductInput | CourseProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CourseProductCreateManyProductInputEnvelope
    set?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    disconnect?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    delete?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    connect?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    update?: CourseProductUpdateWithWhereUniqueWithoutProductInput | CourseProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CourseProductUpdateManyWithWhereWithoutProductInput | CourseProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CourseProductScalarWhereInput | CourseProductScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchaseCreateWithoutProductInput, PurchaseUncheckedCreateWithoutProductInput> | PurchaseCreateWithoutProductInput[] | PurchaseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutProductInput | PurchaseCreateOrConnectWithoutProductInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutProductInput | PurchaseUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchaseCreateManyProductInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutProductInput | PurchaseUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutProductInput | PurchaseUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type CourseProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CourseProductCreateWithoutProductInput, CourseProductUncheckedCreateWithoutProductInput> | CourseProductCreateWithoutProductInput[] | CourseProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CourseProductCreateOrConnectWithoutProductInput | CourseProductCreateOrConnectWithoutProductInput[]
    upsert?: CourseProductUpsertWithWhereUniqueWithoutProductInput | CourseProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CourseProductCreateManyProductInputEnvelope
    set?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    disconnect?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    delete?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    connect?: CourseProductWhereUniqueInput | CourseProductWhereUniqueInput[]
    update?: CourseProductUpdateWithWhereUniqueWithoutProductInput | CourseProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CourseProductUpdateManyWithWhereWithoutProductInput | CourseProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CourseProductScalarWhereInput | CourseProductScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchaseCreateWithoutProductInput, PurchaseUncheckedCreateWithoutProductInput> | PurchaseCreateWithoutProductInput[] | PurchaseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutProductInput | PurchaseCreateOrConnectWithoutProductInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutProductInput | PurchaseUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchaseCreateManyProductInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutProductInput | PurchaseUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutProductInput | PurchaseUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<ProductCreateWithoutPurchasesInput, ProductUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchasesInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPurchaseNestedInput = {
    create?: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseInput
    upsert?: UserUpsertWithoutPurchaseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchaseInput, UserUpdateWithoutPurchaseInput>, UserUncheckedUpdateWithoutPurchaseInput>
  }

  export type ProductUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<ProductCreateWithoutPurchasesInput, ProductUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchasesInput
    upsert?: ProductUpsertWithoutPurchasesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPurchasesInput, ProductUpdateWithoutPurchasesInput>, ProductUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserCreateNestedOneWithoutUserCourseAccessInput = {
    create?: XOR<UserCreateWithoutUserCourseAccessInput, UserUncheckedCreateWithoutUserCourseAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCourseAccessInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutUserCourseAccessInput = {
    create?: XOR<CourseCreateWithoutUserCourseAccessInput, CourseUncheckedCreateWithoutUserCourseAccessInput>
    connectOrCreate?: CourseCreateOrConnectWithoutUserCourseAccessInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserCourseAccessNestedInput = {
    create?: XOR<UserCreateWithoutUserCourseAccessInput, UserUncheckedCreateWithoutUserCourseAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCourseAccessInput
    upsert?: UserUpsertWithoutUserCourseAccessInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserCourseAccessInput, UserUpdateWithoutUserCourseAccessInput>, UserUncheckedUpdateWithoutUserCourseAccessInput>
  }

  export type CourseUpdateOneRequiredWithoutUserCourseAccessNestedInput = {
    create?: XOR<CourseCreateWithoutUserCourseAccessInput, CourseUncheckedCreateWithoutUserCourseAccessInput>
    connectOrCreate?: CourseCreateOrConnectWithoutUserCourseAccessInput
    upsert?: CourseUpsertWithoutUserCourseAccessInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutUserCourseAccessInput, CourseUpdateWithoutUserCourseAccessInput>, CourseUncheckedUpdateWithoutUserCourseAccessInput>
  }

  export type UserCreateNestedOneWithoutUserLessonCompleteInput = {
    create?: XOR<UserCreateWithoutUserLessonCompleteInput, UserUncheckedCreateWithoutUserLessonCompleteInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserLessonCompleteInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutUserLessonsCompleteInput = {
    create?: XOR<LessonCreateWithoutUserLessonsCompleteInput, LessonUncheckedCreateWithoutUserLessonsCompleteInput>
    connectOrCreate?: LessonCreateOrConnectWithoutUserLessonsCompleteInput
    connect?: LessonWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserLessonCompleteNestedInput = {
    create?: XOR<UserCreateWithoutUserLessonCompleteInput, UserUncheckedCreateWithoutUserLessonCompleteInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserLessonCompleteInput
    upsert?: UserUpsertWithoutUserLessonCompleteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserLessonCompleteInput, UserUpdateWithoutUserLessonCompleteInput>, UserUncheckedUpdateWithoutUserLessonCompleteInput>
  }

  export type LessonUpdateOneRequiredWithoutUserLessonsCompleteNestedInput = {
    create?: XOR<LessonCreateWithoutUserLessonsCompleteInput, LessonUncheckedCreateWithoutUserLessonsCompleteInput>
    connectOrCreate?: LessonCreateOrConnectWithoutUserLessonsCompleteInput
    upsert?: LessonUpsertWithoutUserLessonsCompleteInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutUserLessonsCompleteInput, LessonUpdateWithoutUserLessonsCompleteInput>, LessonUncheckedUpdateWithoutUserLessonsCompleteInput>
  }

  export type UserCreateNestedOneWithoutCompletedLessonInput = {
    create?: XOR<UserCreateWithoutCompletedLessonInput, UserUncheckedCreateWithoutCompletedLessonInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletedLessonInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutCompletedLessonInput = {
    create?: XOR<LessonCreateWithoutCompletedLessonInput, LessonUncheckedCreateWithoutCompletedLessonInput>
    connectOrCreate?: LessonCreateOrConnectWithoutCompletedLessonInput
    connect?: LessonWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCompletedLessonNestedInput = {
    create?: XOR<UserCreateWithoutCompletedLessonInput, UserUncheckedCreateWithoutCompletedLessonInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletedLessonInput
    upsert?: UserUpsertWithoutCompletedLessonInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompletedLessonInput, UserUpdateWithoutCompletedLessonInput>, UserUncheckedUpdateWithoutCompletedLessonInput>
  }

  export type LessonUpdateOneRequiredWithoutCompletedLessonNestedInput = {
    create?: XOR<LessonCreateWithoutCompletedLessonInput, LessonUncheckedCreateWithoutCompletedLessonInput>
    connectOrCreate?: LessonCreateOrConnectWithoutCompletedLessonInput
    upsert?: LessonUpsertWithoutCompletedLessonInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutCompletedLessonInput, LessonUpdateWithoutCompletedLessonInput>, LessonUncheckedUpdateWithoutCompletedLessonInput>
  }

  export type UserCreateNestedOneWithoutCommissionsGivenInput = {
    create?: XOR<UserCreateWithoutCommissionsGivenInput, UserUncheckedCreateWithoutCommissionsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommissionsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommissionsEarnedInput = {
    create?: XOR<UserCreateWithoutCommissionsEarnedInput, UserUncheckedCreateWithoutCommissionsEarnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommissionsEarnedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReferralCommissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReferralCommissionStatus
  }

  export type UserUpdateOneRequiredWithoutCommissionsGivenNestedInput = {
    create?: XOR<UserCreateWithoutCommissionsGivenInput, UserUncheckedCreateWithoutCommissionsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommissionsGivenInput
    upsert?: UserUpsertWithoutCommissionsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommissionsGivenInput, UserUpdateWithoutCommissionsGivenInput>, UserUncheckedUpdateWithoutCommissionsGivenInput>
  }

  export type UserUpdateOneRequiredWithoutCommissionsEarnedNestedInput = {
    create?: XOR<UserCreateWithoutCommissionsEarnedInput, UserUncheckedCreateWithoutCommissionsEarnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommissionsEarnedInput
    upsert?: UserUpsertWithoutCommissionsEarnedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommissionsEarnedInput, UserUpdateWithoutCommissionsEarnedInput>, UserUncheckedUpdateWithoutCommissionsEarnedInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumcourse_section_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.course_section_status | Enumcourse_section_statusFieldRefInput<$PrismaModel>
    in?: $Enums.course_section_status[] | ListEnumcourse_section_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.course_section_status[] | ListEnumcourse_section_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumcourse_section_statusFilter<$PrismaModel> | $Enums.course_section_status
  }

  export type NestedEnumcourse_section_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.course_section_status | Enumcourse_section_statusFieldRefInput<$PrismaModel>
    in?: $Enums.course_section_status[] | ListEnumcourse_section_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.course_section_status[] | ListEnumcourse_section_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumcourse_section_statusWithAggregatesFilter<$PrismaModel> | $Enums.course_section_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcourse_section_statusFilter<$PrismaModel>
    _max?: NestedEnumcourse_section_statusFilter<$PrismaModel>
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

  export type NestedEnumlesson_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.lesson_status | Enumlesson_statusFieldRefInput<$PrismaModel>
    in?: $Enums.lesson_status[] | ListEnumlesson_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.lesson_status[] | ListEnumlesson_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumlesson_statusFilter<$PrismaModel> | $Enums.lesson_status
  }

  export type NestedEnumlesson_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.lesson_status | Enumlesson_statusFieldRefInput<$PrismaModel>
    in?: $Enums.lesson_status[] | ListEnumlesson_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.lesson_status[] | ListEnumlesson_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumlesson_statusWithAggregatesFilter<$PrismaModel> | $Enums.lesson_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumlesson_statusFilter<$PrismaModel>
    _max?: NestedEnumlesson_statusFilter<$PrismaModel>
  }

  export type NestedEnumproduct_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.product_status | Enumproduct_statusFieldRefInput<$PrismaModel>
    in?: $Enums.product_status[] | ListEnumproduct_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.product_status[] | ListEnumproduct_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumproduct_statusFilter<$PrismaModel> | $Enums.product_status
  }

  export type NestedEnumproduct_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_status | Enumproduct_statusFieldRefInput<$PrismaModel>
    in?: $Enums.product_status[] | ListEnumproduct_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.product_status[] | ListEnumproduct_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumproduct_statusWithAggregatesFilter<$PrismaModel> | $Enums.product_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproduct_statusFilter<$PrismaModel>
    _max?: NestedEnumproduct_statusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumReferralCommissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralCommissionStatus | EnumReferralCommissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralCommissionStatus[] | ListEnumReferralCommissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralCommissionStatus[] | ListEnumReferralCommissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralCommissionStatusFilter<$PrismaModel> | $Enums.ReferralCommissionStatus
  }

  export type NestedEnumReferralCommissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralCommissionStatus | EnumReferralCommissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralCommissionStatus[] | ListEnumReferralCommissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralCommissionStatus[] | ListEnumReferralCommissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralCommissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReferralCommissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferralCommissionStatusFilter<$PrismaModel>
    _max?: NestedEnumReferralCommissionStatusFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    expiresAt?: Date | string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    expiresAt?: Date | string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutUserInput = {
    id?: string
    pricePaidInCents: number
    productDetails: JsonNullValueInput | InputJsonValue
    stripeSessionId: string
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutUserInput = {
    id?: string
    pricePaidInCents: number
    productDetails: JsonNullValueInput | InputJsonValue
    productId: string
    stripeSessionId: string
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseCreateManyUserInputEnvelope = {
    data: PurchaseCreateManyUserInput | PurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCourseAccessCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutUserCourseAccessInput
  }

  export type UserCourseAccessUncheckedCreateWithoutUserInput = {
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseAccessCreateOrConnectWithoutUserInput = {
    where: UserCourseAccessWhereUniqueInput
    create: XOR<UserCourseAccessCreateWithoutUserInput, UserCourseAccessUncheckedCreateWithoutUserInput>
  }

  export type UserCourseAccessCreateManyUserInputEnvelope = {
    data: UserCourseAccessCreateManyUserInput | UserCourseAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserLessonCompleteCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    lesson: LessonCreateNestedOneWithoutUserLessonsCompleteInput
  }

  export type UserLessonCompleteUncheckedCreateWithoutUserInput = {
    lessonId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLessonCompleteCreateOrConnectWithoutUserInput = {
    where: UserLessonCompleteWhereUniqueInput
    create: XOR<UserLessonCompleteCreateWithoutUserInput, UserLessonCompleteUncheckedCreateWithoutUserInput>
  }

  export type UserLessonCompleteCreateManyUserInputEnvelope = {
    data: UserLessonCompleteCreateManyUserInput | UserLessonCompleteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompletedLessonCreateWithoutUserInput = {
    createdAt?: Date | string
    lesson: LessonCreateNestedOneWithoutCompletedLessonInput
  }

  export type CompletedLessonUncheckedCreateWithoutUserInput = {
    lessonId: string
    createdAt?: Date | string
  }

  export type CompletedLessonCreateOrConnectWithoutUserInput = {
    where: CompletedLessonWhereUniqueInput
    create: XOR<CompletedLessonCreateWithoutUserInput, CompletedLessonUncheckedCreateWithoutUserInput>
  }

  export type CompletedLessonCreateManyUserInputEnvelope = {
    data: CompletedLessonCreateManyUserInput | CompletedLessonCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutReferralsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    Session?: SessionCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    commissionsGiven?: ReferralCommissionCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutReferralsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    referredById?: string | null
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessUncheckedCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteUncheckedCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonUncheckedCreateNestedManyWithoutUserInput
    commissionsGiven?: ReferralCommissionUncheckedCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutReferralsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
  }

  export type UserCreateWithoutReferredByInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    Session?: SessionCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonCreateNestedManyWithoutUserInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutReferredByInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessUncheckedCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteUncheckedCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionUncheckedCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutReferredByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput>
  }

  export type UserCreateManyReferredByInputEnvelope = {
    data: UserCreateManyReferredByInput | UserCreateManyReferredByInput[]
    skipDuplicates?: boolean
  }

  export type ReferralCommissionCreateWithoutReferrerInput = {
    id?: string
    amountInRupees: number
    status?: $Enums.ReferralCommissionStatus
    createdAt?: Date | string
    referred: UserCreateNestedOneWithoutCommissionsEarnedInput
  }

  export type ReferralCommissionUncheckedCreateWithoutReferrerInput = {
    id?: string
    referredId: string
    amountInRupees: number
    status?: $Enums.ReferralCommissionStatus
    createdAt?: Date | string
  }

  export type ReferralCommissionCreateOrConnectWithoutReferrerInput = {
    where: ReferralCommissionWhereUniqueInput
    create: XOR<ReferralCommissionCreateWithoutReferrerInput, ReferralCommissionUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralCommissionCreateManyReferrerInputEnvelope = {
    data: ReferralCommissionCreateManyReferrerInput | ReferralCommissionCreateManyReferrerInput[]
    skipDuplicates?: boolean
  }

  export type ReferralCommissionCreateWithoutReferredInput = {
    id?: string
    amountInRupees: number
    status?: $Enums.ReferralCommissionStatus
    createdAt?: Date | string
    referrer: UserCreateNestedOneWithoutCommissionsGivenInput
  }

  export type ReferralCommissionUncheckedCreateWithoutReferredInput = {
    id?: string
    referrerId: string
    amountInRupees: number
    status?: $Enums.ReferralCommissionStatus
    createdAt?: Date | string
  }

  export type ReferralCommissionCreateOrConnectWithoutReferredInput = {
    where: ReferralCommissionWhereUniqueInput
    create: XOR<ReferralCommissionCreateWithoutReferredInput, ReferralCommissionUncheckedCreateWithoutReferredInput>
  }

  export type ReferralCommissionCreateManyReferredInputEnvelope = {
    data: ReferralCommissionCreateManyReferredInput | ReferralCommissionCreateManyReferredInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
  }

  export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutUserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: StringFilter<"Purchase"> | string
    pricePaidInCents?: IntFilter<"Purchase"> | number
    productDetails?: JsonFilter<"Purchase">
    userId?: StringFilter<"Purchase"> | string
    productId?: StringFilter<"Purchase"> | string
    stripeSessionId?: StringFilter<"Purchase"> | string
    refundedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
  }

  export type UserCourseAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCourseAccessWhereUniqueInput
    update: XOR<UserCourseAccessUpdateWithoutUserInput, UserCourseAccessUncheckedUpdateWithoutUserInput>
    create: XOR<UserCourseAccessCreateWithoutUserInput, UserCourseAccessUncheckedCreateWithoutUserInput>
  }

  export type UserCourseAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCourseAccessWhereUniqueInput
    data: XOR<UserCourseAccessUpdateWithoutUserInput, UserCourseAccessUncheckedUpdateWithoutUserInput>
  }

  export type UserCourseAccessUpdateManyWithWhereWithoutUserInput = {
    where: UserCourseAccessScalarWhereInput
    data: XOR<UserCourseAccessUpdateManyMutationInput, UserCourseAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCourseAccessScalarWhereInput = {
    AND?: UserCourseAccessScalarWhereInput | UserCourseAccessScalarWhereInput[]
    OR?: UserCourseAccessScalarWhereInput[]
    NOT?: UserCourseAccessScalarWhereInput | UserCourseAccessScalarWhereInput[]
    userId?: StringFilter<"UserCourseAccess"> | string
    courseId?: StringFilter<"UserCourseAccess"> | string
    createdAt?: DateTimeFilter<"UserCourseAccess"> | Date | string
    updatedAt?: DateTimeFilter<"UserCourseAccess"> | Date | string
  }

  export type UserLessonCompleteUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLessonCompleteWhereUniqueInput
    update: XOR<UserLessonCompleteUpdateWithoutUserInput, UserLessonCompleteUncheckedUpdateWithoutUserInput>
    create: XOR<UserLessonCompleteCreateWithoutUserInput, UserLessonCompleteUncheckedCreateWithoutUserInput>
  }

  export type UserLessonCompleteUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLessonCompleteWhereUniqueInput
    data: XOR<UserLessonCompleteUpdateWithoutUserInput, UserLessonCompleteUncheckedUpdateWithoutUserInput>
  }

  export type UserLessonCompleteUpdateManyWithWhereWithoutUserInput = {
    where: UserLessonCompleteScalarWhereInput
    data: XOR<UserLessonCompleteUpdateManyMutationInput, UserLessonCompleteUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLessonCompleteScalarWhereInput = {
    AND?: UserLessonCompleteScalarWhereInput | UserLessonCompleteScalarWhereInput[]
    OR?: UserLessonCompleteScalarWhereInput[]
    NOT?: UserLessonCompleteScalarWhereInput | UserLessonCompleteScalarWhereInput[]
    userId?: StringFilter<"UserLessonComplete"> | string
    lessonId?: StringFilter<"UserLessonComplete"> | string
    createdAt?: DateTimeFilter<"UserLessonComplete"> | Date | string
    updatedAt?: DateTimeFilter<"UserLessonComplete"> | Date | string
  }

  export type CompletedLessonUpsertWithWhereUniqueWithoutUserInput = {
    where: CompletedLessonWhereUniqueInput
    update: XOR<CompletedLessonUpdateWithoutUserInput, CompletedLessonUncheckedUpdateWithoutUserInput>
    create: XOR<CompletedLessonCreateWithoutUserInput, CompletedLessonUncheckedCreateWithoutUserInput>
  }

  export type CompletedLessonUpdateWithWhereUniqueWithoutUserInput = {
    where: CompletedLessonWhereUniqueInput
    data: XOR<CompletedLessonUpdateWithoutUserInput, CompletedLessonUncheckedUpdateWithoutUserInput>
  }

  export type CompletedLessonUpdateManyWithWhereWithoutUserInput = {
    where: CompletedLessonScalarWhereInput
    data: XOR<CompletedLessonUpdateManyMutationInput, CompletedLessonUncheckedUpdateManyWithoutUserInput>
  }

  export type CompletedLessonScalarWhereInput = {
    AND?: CompletedLessonScalarWhereInput | CompletedLessonScalarWhereInput[]
    OR?: CompletedLessonScalarWhereInput[]
    NOT?: CompletedLessonScalarWhereInput | CompletedLessonScalarWhereInput[]
    userId?: StringFilter<"CompletedLesson"> | string
    lessonId?: StringFilter<"CompletedLesson"> | string
    createdAt?: DateTimeFilter<"CompletedLesson"> | Date | string
  }

  export type UserUpsertWithoutReferralsInput = {
    update: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    commissionsGiven?: ReferralCommissionUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUncheckedUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUncheckedUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUncheckedUpdateManyWithoutUserNestedInput
    commissionsGiven?: ReferralCommissionUncheckedUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutReferredByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReferredByInput, UserUncheckedUpdateWithoutReferredByInput>
    create: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReferredByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReferredByInput, UserUncheckedUpdateWithoutReferredByInput>
  }

  export type UserUpdateManyWithWhereWithoutReferredByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReferredByInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    role?: Enumuser_roleFilter<"User"> | $Enums.user_role
    referralCode?: StringNullableFilter<"User"> | string | null
    referredById?: StringNullableFilter<"User"> | string | null
  }

  export type ReferralCommissionUpsertWithWhereUniqueWithoutReferrerInput = {
    where: ReferralCommissionWhereUniqueInput
    update: XOR<ReferralCommissionUpdateWithoutReferrerInput, ReferralCommissionUncheckedUpdateWithoutReferrerInput>
    create: XOR<ReferralCommissionCreateWithoutReferrerInput, ReferralCommissionUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralCommissionUpdateWithWhereUniqueWithoutReferrerInput = {
    where: ReferralCommissionWhereUniqueInput
    data: XOR<ReferralCommissionUpdateWithoutReferrerInput, ReferralCommissionUncheckedUpdateWithoutReferrerInput>
  }

  export type ReferralCommissionUpdateManyWithWhereWithoutReferrerInput = {
    where: ReferralCommissionScalarWhereInput
    data: XOR<ReferralCommissionUpdateManyMutationInput, ReferralCommissionUncheckedUpdateManyWithoutReferrerInput>
  }

  export type ReferralCommissionScalarWhereInput = {
    AND?: ReferralCommissionScalarWhereInput | ReferralCommissionScalarWhereInput[]
    OR?: ReferralCommissionScalarWhereInput[]
    NOT?: ReferralCommissionScalarWhereInput | ReferralCommissionScalarWhereInput[]
    id?: StringFilter<"ReferralCommission"> | string
    referrerId?: StringFilter<"ReferralCommission"> | string
    referredId?: StringFilter<"ReferralCommission"> | string
    amountInRupees?: IntFilter<"ReferralCommission"> | number
    status?: EnumReferralCommissionStatusFilter<"ReferralCommission"> | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeFilter<"ReferralCommission"> | Date | string
  }

  export type ReferralCommissionUpsertWithWhereUniqueWithoutReferredInput = {
    where: ReferralCommissionWhereUniqueInput
    update: XOR<ReferralCommissionUpdateWithoutReferredInput, ReferralCommissionUncheckedUpdateWithoutReferredInput>
    create: XOR<ReferralCommissionCreateWithoutReferredInput, ReferralCommissionUncheckedCreateWithoutReferredInput>
  }

  export type ReferralCommissionUpdateWithWhereUniqueWithoutReferredInput = {
    where: ReferralCommissionWhereUniqueInput
    data: XOR<ReferralCommissionUpdateWithoutReferredInput, ReferralCommissionUncheckedUpdateWithoutReferredInput>
  }

  export type ReferralCommissionUpdateManyWithWhereWithoutReferredInput = {
    where: ReferralCommissionScalarWhereInput
    data: XOR<ReferralCommissionUpdateManyMutationInput, ReferralCommissionUncheckedUpdateManyWithoutReferredInput>
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    Account?: AccountCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    referredById?: string | null
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessUncheckedCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteUncheckedCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionUncheckedCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    Account?: AccountUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUncheckedUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUncheckedUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUncheckedUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserCreateWithoutAccountInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    Session?: SessionCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    referredById?: string | null
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessUncheckedCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteUncheckedCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionUncheckedCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUncheckedUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUncheckedUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUncheckedUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type CourseProductCreateWithoutCourseInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutCourseProductsInput
  }

  export type CourseProductUncheckedCreateWithoutCourseInput = {
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseProductCreateOrConnectWithoutCourseInput = {
    where: CourseProductWhereUniqueInput
    create: XOR<CourseProductCreateWithoutCourseInput, CourseProductUncheckedCreateWithoutCourseInput>
  }

  export type CourseProductCreateManyCourseInputEnvelope = {
    data: CourseProductCreateManyCourseInput | CourseProductCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserCourseAccessCreateWithoutCourseInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserCourseAccessInput
  }

  export type UserCourseAccessUncheckedCreateWithoutCourseInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseAccessCreateOrConnectWithoutCourseInput = {
    where: UserCourseAccessWhereUniqueInput
    create: XOR<UserCourseAccessCreateWithoutCourseInput, UserCourseAccessUncheckedCreateWithoutCourseInput>
  }

  export type UserCourseAccessCreateManyCourseInputEnvelope = {
    data: UserCourseAccessCreateManyCourseInput | UserCourseAccessCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseSectionCreateWithoutCourseInput = {
    id?: string
    name: string
    status?: $Enums.course_section_status
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutSectionInput
  }

  export type CourseSectionUncheckedCreateWithoutCourseInput = {
    id?: string
    name: string
    status?: $Enums.course_section_status
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutSectionInput
  }

  export type CourseSectionCreateOrConnectWithoutCourseInput = {
    where: CourseSectionWhereUniqueInput
    create: XOR<CourseSectionCreateWithoutCourseInput, CourseSectionUncheckedCreateWithoutCourseInput>
  }

  export type CourseSectionCreateManyCourseInputEnvelope = {
    data: CourseSectionCreateManyCourseInput | CourseSectionCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseProductUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseProductWhereUniqueInput
    update: XOR<CourseProductUpdateWithoutCourseInput, CourseProductUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseProductCreateWithoutCourseInput, CourseProductUncheckedCreateWithoutCourseInput>
  }

  export type CourseProductUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseProductWhereUniqueInput
    data: XOR<CourseProductUpdateWithoutCourseInput, CourseProductUncheckedUpdateWithoutCourseInput>
  }

  export type CourseProductUpdateManyWithWhereWithoutCourseInput = {
    where: CourseProductScalarWhereInput
    data: XOR<CourseProductUpdateManyMutationInput, CourseProductUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseProductScalarWhereInput = {
    AND?: CourseProductScalarWhereInput | CourseProductScalarWhereInput[]
    OR?: CourseProductScalarWhereInput[]
    NOT?: CourseProductScalarWhereInput | CourseProductScalarWhereInput[]
    courseId?: StringFilter<"CourseProduct"> | string
    productId?: StringFilter<"CourseProduct"> | string
    createdAt?: DateTimeFilter<"CourseProduct"> | Date | string
    updatedAt?: DateTimeFilter<"CourseProduct"> | Date | string
  }

  export type UserCourseAccessUpsertWithWhereUniqueWithoutCourseInput = {
    where: UserCourseAccessWhereUniqueInput
    update: XOR<UserCourseAccessUpdateWithoutCourseInput, UserCourseAccessUncheckedUpdateWithoutCourseInput>
    create: XOR<UserCourseAccessCreateWithoutCourseInput, UserCourseAccessUncheckedCreateWithoutCourseInput>
  }

  export type UserCourseAccessUpdateWithWhereUniqueWithoutCourseInput = {
    where: UserCourseAccessWhereUniqueInput
    data: XOR<UserCourseAccessUpdateWithoutCourseInput, UserCourseAccessUncheckedUpdateWithoutCourseInput>
  }

  export type UserCourseAccessUpdateManyWithWhereWithoutCourseInput = {
    where: UserCourseAccessScalarWhereInput
    data: XOR<UserCourseAccessUpdateManyMutationInput, UserCourseAccessUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseSectionUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseSectionWhereUniqueInput
    update: XOR<CourseSectionUpdateWithoutCourseInput, CourseSectionUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseSectionCreateWithoutCourseInput, CourseSectionUncheckedCreateWithoutCourseInput>
  }

  export type CourseSectionUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseSectionWhereUniqueInput
    data: XOR<CourseSectionUpdateWithoutCourseInput, CourseSectionUncheckedUpdateWithoutCourseInput>
  }

  export type CourseSectionUpdateManyWithWhereWithoutCourseInput = {
    where: CourseSectionScalarWhereInput
    data: XOR<CourseSectionUpdateManyMutationInput, CourseSectionUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseSectionScalarWhereInput = {
    AND?: CourseSectionScalarWhereInput | CourseSectionScalarWhereInput[]
    OR?: CourseSectionScalarWhereInput[]
    NOT?: CourseSectionScalarWhereInput | CourseSectionScalarWhereInput[]
    id?: StringFilter<"CourseSection"> | string
    name?: StringFilter<"CourseSection"> | string
    status?: Enumcourse_section_statusFilter<"CourseSection"> | $Enums.course_section_status
    order?: IntFilter<"CourseSection"> | number
    courseId?: StringFilter<"CourseSection"> | string
    createdAt?: DateTimeFilter<"CourseSection"> | Date | string
    updatedAt?: DateTimeFilter<"CourseSection"> | Date | string
  }

  export type CourseCreateWithoutCourseProductsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notionDoc?: string | null
    userCourseAccess?: UserCourseAccessCreateNestedManyWithoutCourseInput
    courseSections?: CourseSectionCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCourseProductsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notionDoc?: string | null
    userCourseAccess?: UserCourseAccessUncheckedCreateNestedManyWithoutCourseInput
    courseSections?: CourseSectionUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCourseProductsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseProductsInput, CourseUncheckedCreateWithoutCourseProductsInput>
  }

  export type ProductCreateWithoutCourseProductsInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    priceInDollars: number
    status?: $Enums.product_status
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCourseProductsInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    priceInDollars: number
    status?: $Enums.product_status
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCourseProductsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCourseProductsInput, ProductUncheckedCreateWithoutCourseProductsInput>
  }

  export type CourseUpsertWithoutCourseProductsInput = {
    update: XOR<CourseUpdateWithoutCourseProductsInput, CourseUncheckedUpdateWithoutCourseProductsInput>
    create: XOR<CourseCreateWithoutCourseProductsInput, CourseUncheckedCreateWithoutCourseProductsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseProductsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseProductsInput, CourseUncheckedUpdateWithoutCourseProductsInput>
  }

  export type CourseUpdateWithoutCourseProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notionDoc?: NullableStringFieldUpdateOperationsInput | string | null
    userCourseAccess?: UserCourseAccessUpdateManyWithoutCourseNestedInput
    courseSections?: CourseSectionUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notionDoc?: NullableStringFieldUpdateOperationsInput | string | null
    userCourseAccess?: UserCourseAccessUncheckedUpdateManyWithoutCourseNestedInput
    courseSections?: CourseSectionUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type ProductUpsertWithoutCourseProductsInput = {
    update: XOR<ProductUpdateWithoutCourseProductsInput, ProductUncheckedUpdateWithoutCourseProductsInput>
    create: XOR<ProductCreateWithoutCourseProductsInput, ProductUncheckedCreateWithoutCourseProductsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCourseProductsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCourseProductsInput, ProductUncheckedUpdateWithoutCourseProductsInput>
  }

  export type ProductUpdateWithoutCourseProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInDollars?: IntFieldUpdateOperationsInput | number
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCourseProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInDollars?: IntFieldUpdateOperationsInput | number
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CourseCreateWithoutCourseSectionsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notionDoc?: string | null
    courseProducts?: CourseProductCreateNestedManyWithoutCourseInput
    userCourseAccess?: UserCourseAccessCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCourseSectionsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notionDoc?: string | null
    courseProducts?: CourseProductUncheckedCreateNestedManyWithoutCourseInput
    userCourseAccess?: UserCourseAccessUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCourseSectionsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseSectionsInput, CourseUncheckedCreateWithoutCourseSectionsInput>
  }

  export type LessonCreateWithoutSectionInput = {
    id?: string
    name: string
    description?: string | null
    youtubeVideoId: string
    order: number
    status?: $Enums.lesson_status
    createdAt?: Date | string
    updatedAt?: Date | string
    userLessonsComplete?: UserLessonCompleteCreateNestedManyWithoutLessonInput
    CompletedLesson?: CompletedLessonCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutSectionInput = {
    id?: string
    name: string
    description?: string | null
    youtubeVideoId: string
    order: number
    status?: $Enums.lesson_status
    createdAt?: Date | string
    updatedAt?: Date | string
    userLessonsComplete?: UserLessonCompleteUncheckedCreateNestedManyWithoutLessonInput
    CompletedLesson?: CompletedLessonUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutSectionInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutSectionInput, LessonUncheckedCreateWithoutSectionInput>
  }

  export type LessonCreateManySectionInputEnvelope = {
    data: LessonCreateManySectionInput | LessonCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutCourseSectionsInput = {
    update: XOR<CourseUpdateWithoutCourseSectionsInput, CourseUncheckedUpdateWithoutCourseSectionsInput>
    create: XOR<CourseCreateWithoutCourseSectionsInput, CourseUncheckedCreateWithoutCourseSectionsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseSectionsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseSectionsInput, CourseUncheckedUpdateWithoutCourseSectionsInput>
  }

  export type CourseUpdateWithoutCourseSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notionDoc?: NullableStringFieldUpdateOperationsInput | string | null
    courseProducts?: CourseProductUpdateManyWithoutCourseNestedInput
    userCourseAccess?: UserCourseAccessUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notionDoc?: NullableStringFieldUpdateOperationsInput | string | null
    courseProducts?: CourseProductUncheckedUpdateManyWithoutCourseNestedInput
    userCourseAccess?: UserCourseAccessUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type LessonUpsertWithWhereUniqueWithoutSectionInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutSectionInput, LessonUncheckedUpdateWithoutSectionInput>
    create: XOR<LessonCreateWithoutSectionInput, LessonUncheckedCreateWithoutSectionInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutSectionInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutSectionInput, LessonUncheckedUpdateWithoutSectionInput>
  }

  export type LessonUpdateManyWithWhereWithoutSectionInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutSectionInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: StringFilter<"Lesson"> | string
    name?: StringFilter<"Lesson"> | string
    description?: StringNullableFilter<"Lesson"> | string | null
    youtubeVideoId?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    status?: Enumlesson_statusFilter<"Lesson"> | $Enums.lesson_status
    sectionId?: StringFilter<"Lesson"> | string
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
  }

  export type CourseSectionCreateWithoutLessonsInput = {
    id?: string
    name: string
    status?: $Enums.course_section_status
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseSectionsInput
  }

  export type CourseSectionUncheckedCreateWithoutLessonsInput = {
    id?: string
    name: string
    status?: $Enums.course_section_status
    order: number
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseSectionCreateOrConnectWithoutLessonsInput = {
    where: CourseSectionWhereUniqueInput
    create: XOR<CourseSectionCreateWithoutLessonsInput, CourseSectionUncheckedCreateWithoutLessonsInput>
  }

  export type UserLessonCompleteCreateWithoutLessonInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserLessonCompleteInput
  }

  export type UserLessonCompleteUncheckedCreateWithoutLessonInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLessonCompleteCreateOrConnectWithoutLessonInput = {
    where: UserLessonCompleteWhereUniqueInput
    create: XOR<UserLessonCompleteCreateWithoutLessonInput, UserLessonCompleteUncheckedCreateWithoutLessonInput>
  }

  export type UserLessonCompleteCreateManyLessonInputEnvelope = {
    data: UserLessonCompleteCreateManyLessonInput | UserLessonCompleteCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type CompletedLessonCreateWithoutLessonInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCompletedLessonInput
  }

  export type CompletedLessonUncheckedCreateWithoutLessonInput = {
    userId: string
    createdAt?: Date | string
  }

  export type CompletedLessonCreateOrConnectWithoutLessonInput = {
    where: CompletedLessonWhereUniqueInput
    create: XOR<CompletedLessonCreateWithoutLessonInput, CompletedLessonUncheckedCreateWithoutLessonInput>
  }

  export type CompletedLessonCreateManyLessonInputEnvelope = {
    data: CompletedLessonCreateManyLessonInput | CompletedLessonCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type CourseSectionUpsertWithoutLessonsInput = {
    update: XOR<CourseSectionUpdateWithoutLessonsInput, CourseSectionUncheckedUpdateWithoutLessonsInput>
    create: XOR<CourseSectionCreateWithoutLessonsInput, CourseSectionUncheckedCreateWithoutLessonsInput>
    where?: CourseSectionWhereInput
  }

  export type CourseSectionUpdateToOneWithWhereWithoutLessonsInput = {
    where?: CourseSectionWhereInput
    data: XOR<CourseSectionUpdateWithoutLessonsInput, CourseSectionUncheckedUpdateWithoutLessonsInput>
  }

  export type CourseSectionUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: Enumcourse_section_statusFieldUpdateOperationsInput | $Enums.course_section_status
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseSectionsNestedInput
  }

  export type CourseSectionUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: Enumcourse_section_statusFieldUpdateOperationsInput | $Enums.course_section_status
    order?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLessonCompleteUpsertWithWhereUniqueWithoutLessonInput = {
    where: UserLessonCompleteWhereUniqueInput
    update: XOR<UserLessonCompleteUpdateWithoutLessonInput, UserLessonCompleteUncheckedUpdateWithoutLessonInput>
    create: XOR<UserLessonCompleteCreateWithoutLessonInput, UserLessonCompleteUncheckedCreateWithoutLessonInput>
  }

  export type UserLessonCompleteUpdateWithWhereUniqueWithoutLessonInput = {
    where: UserLessonCompleteWhereUniqueInput
    data: XOR<UserLessonCompleteUpdateWithoutLessonInput, UserLessonCompleteUncheckedUpdateWithoutLessonInput>
  }

  export type UserLessonCompleteUpdateManyWithWhereWithoutLessonInput = {
    where: UserLessonCompleteScalarWhereInput
    data: XOR<UserLessonCompleteUpdateManyMutationInput, UserLessonCompleteUncheckedUpdateManyWithoutLessonInput>
  }

  export type CompletedLessonUpsertWithWhereUniqueWithoutLessonInput = {
    where: CompletedLessonWhereUniqueInput
    update: XOR<CompletedLessonUpdateWithoutLessonInput, CompletedLessonUncheckedUpdateWithoutLessonInput>
    create: XOR<CompletedLessonCreateWithoutLessonInput, CompletedLessonUncheckedCreateWithoutLessonInput>
  }

  export type CompletedLessonUpdateWithWhereUniqueWithoutLessonInput = {
    where: CompletedLessonWhereUniqueInput
    data: XOR<CompletedLessonUpdateWithoutLessonInput, CompletedLessonUncheckedUpdateWithoutLessonInput>
  }

  export type CompletedLessonUpdateManyWithWhereWithoutLessonInput = {
    where: CompletedLessonScalarWhereInput
    data: XOR<CompletedLessonUpdateManyMutationInput, CompletedLessonUncheckedUpdateManyWithoutLessonInput>
  }

  export type CourseProductCreateWithoutProductInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseProductsInput
  }

  export type CourseProductUncheckedCreateWithoutProductInput = {
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseProductCreateOrConnectWithoutProductInput = {
    where: CourseProductWhereUniqueInput
    create: XOR<CourseProductCreateWithoutProductInput, CourseProductUncheckedCreateWithoutProductInput>
  }

  export type CourseProductCreateManyProductInputEnvelope = {
    data: CourseProductCreateManyProductInput | CourseProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutProductInput = {
    id?: string
    pricePaidInCents: number
    productDetails: JsonNullValueInput | InputJsonValue
    stripeSessionId: string
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutProductInput = {
    id?: string
    pricePaidInCents: number
    productDetails: JsonNullValueInput | InputJsonValue
    userId: string
    stripeSessionId: string
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutProductInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutProductInput, PurchaseUncheckedCreateWithoutProductInput>
  }

  export type PurchaseCreateManyProductInputEnvelope = {
    data: PurchaseCreateManyProductInput | PurchaseCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CourseProductUpsertWithWhereUniqueWithoutProductInput = {
    where: CourseProductWhereUniqueInput
    update: XOR<CourseProductUpdateWithoutProductInput, CourseProductUncheckedUpdateWithoutProductInput>
    create: XOR<CourseProductCreateWithoutProductInput, CourseProductUncheckedCreateWithoutProductInput>
  }

  export type CourseProductUpdateWithWhereUniqueWithoutProductInput = {
    where: CourseProductWhereUniqueInput
    data: XOR<CourseProductUpdateWithoutProductInput, CourseProductUncheckedUpdateWithoutProductInput>
  }

  export type CourseProductUpdateManyWithWhereWithoutProductInput = {
    where: CourseProductScalarWhereInput
    data: XOR<CourseProductUpdateManyMutationInput, CourseProductUncheckedUpdateManyWithoutProductInput>
  }

  export type PurchaseUpsertWithWhereUniqueWithoutProductInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutProductInput, PurchaseUncheckedUpdateWithoutProductInput>
    create: XOR<PurchaseCreateWithoutProductInput, PurchaseUncheckedCreateWithoutProductInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutProductInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutProductInput, PurchaseUncheckedUpdateWithoutProductInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutProductInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutProductInput>
  }

  export type UserCreateWithoutPurchaseInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    Session?: SessionCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutPurchaseInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    referredById?: string | null
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessUncheckedCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteUncheckedCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionUncheckedCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutPurchaseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
  }

  export type ProductCreateWithoutPurchasesInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    priceInDollars: number
    status?: $Enums.product_status
    createdAt?: Date | string
    updatedAt?: Date | string
    courseProducts?: CourseProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    priceInDollars: number
    status?: $Enums.product_status
    createdAt?: Date | string
    updatedAt?: Date | string
    courseProducts?: CourseProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPurchasesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPurchasesInput, ProductUncheckedCreateWithoutPurchasesInput>
  }

  export type UserUpsertWithoutPurchaseInput = {
    update: XOR<UserUpdateWithoutPurchaseInput, UserUncheckedUpdateWithoutPurchaseInput>
    create: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchaseInput, UserUncheckedUpdateWithoutPurchaseInput>
  }

  export type UserUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUncheckedUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUncheckedUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUncheckedUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type ProductUpsertWithoutPurchasesInput = {
    update: XOR<ProductUpdateWithoutPurchasesInput, ProductUncheckedUpdateWithoutPurchasesInput>
    create: XOR<ProductCreateWithoutPurchasesInput, ProductUncheckedCreateWithoutPurchasesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPurchasesInput, ProductUncheckedUpdateWithoutPurchasesInput>
  }

  export type ProductUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInDollars?: IntFieldUpdateOperationsInput | number
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseProducts?: CourseProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInDollars?: IntFieldUpdateOperationsInput | number
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseProducts?: CourseProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutUserCourseAccessInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    Session?: SessionCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutUserCourseAccessInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    referredById?: string | null
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteUncheckedCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionUncheckedCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutUserCourseAccessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCourseAccessInput, UserUncheckedCreateWithoutUserCourseAccessInput>
  }

  export type CourseCreateWithoutUserCourseAccessInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notionDoc?: string | null
    courseProducts?: CourseProductCreateNestedManyWithoutCourseInput
    courseSections?: CourseSectionCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutUserCourseAccessInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notionDoc?: string | null
    courseProducts?: CourseProductUncheckedCreateNestedManyWithoutCourseInput
    courseSections?: CourseSectionUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutUserCourseAccessInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutUserCourseAccessInput, CourseUncheckedCreateWithoutUserCourseAccessInput>
  }

  export type UserUpsertWithoutUserCourseAccessInput = {
    update: XOR<UserUpdateWithoutUserCourseAccessInput, UserUncheckedUpdateWithoutUserCourseAccessInput>
    create: XOR<UserCreateWithoutUserCourseAccessInput, UserUncheckedCreateWithoutUserCourseAccessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserCourseAccessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserCourseAccessInput, UserUncheckedUpdateWithoutUserCourseAccessInput>
  }

  export type UserUpdateWithoutUserCourseAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCourseAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUncheckedUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUncheckedUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type CourseUpsertWithoutUserCourseAccessInput = {
    update: XOR<CourseUpdateWithoutUserCourseAccessInput, CourseUncheckedUpdateWithoutUserCourseAccessInput>
    create: XOR<CourseCreateWithoutUserCourseAccessInput, CourseUncheckedCreateWithoutUserCourseAccessInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutUserCourseAccessInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutUserCourseAccessInput, CourseUncheckedUpdateWithoutUserCourseAccessInput>
  }

  export type CourseUpdateWithoutUserCourseAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notionDoc?: NullableStringFieldUpdateOperationsInput | string | null
    courseProducts?: CourseProductUpdateManyWithoutCourseNestedInput
    courseSections?: CourseSectionUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutUserCourseAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notionDoc?: NullableStringFieldUpdateOperationsInput | string | null
    courseProducts?: CourseProductUncheckedUpdateManyWithoutCourseNestedInput
    courseSections?: CourseSectionUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutUserLessonCompleteInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    Session?: SessionCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutUserLessonCompleteInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    referredById?: string | null
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessUncheckedCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionUncheckedCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutUserLessonCompleteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserLessonCompleteInput, UserUncheckedCreateWithoutUserLessonCompleteInput>
  }

  export type LessonCreateWithoutUserLessonsCompleteInput = {
    id?: string
    name: string
    description?: string | null
    youtubeVideoId: string
    order: number
    status?: $Enums.lesson_status
    createdAt?: Date | string
    updatedAt?: Date | string
    section: CourseSectionCreateNestedOneWithoutLessonsInput
    CompletedLesson?: CompletedLessonCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutUserLessonsCompleteInput = {
    id?: string
    name: string
    description?: string | null
    youtubeVideoId: string
    order: number
    status?: $Enums.lesson_status
    sectionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    CompletedLesson?: CompletedLessonUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutUserLessonsCompleteInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutUserLessonsCompleteInput, LessonUncheckedCreateWithoutUserLessonsCompleteInput>
  }

  export type UserUpsertWithoutUserLessonCompleteInput = {
    update: XOR<UserUpdateWithoutUserLessonCompleteInput, UserUncheckedUpdateWithoutUserLessonCompleteInput>
    create: XOR<UserCreateWithoutUserLessonCompleteInput, UserUncheckedCreateWithoutUserLessonCompleteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserLessonCompleteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserLessonCompleteInput, UserUncheckedUpdateWithoutUserLessonCompleteInput>
  }

  export type UserUpdateWithoutUserLessonCompleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutUserLessonCompleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUncheckedUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUncheckedUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type LessonUpsertWithoutUserLessonsCompleteInput = {
    update: XOR<LessonUpdateWithoutUserLessonsCompleteInput, LessonUncheckedUpdateWithoutUserLessonsCompleteInput>
    create: XOR<LessonCreateWithoutUserLessonsCompleteInput, LessonUncheckedCreateWithoutUserLessonsCompleteInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutUserLessonsCompleteInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutUserLessonsCompleteInput, LessonUncheckedUpdateWithoutUserLessonsCompleteInput>
  }

  export type LessonUpdateWithoutUserLessonsCompleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeVideoId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: Enumlesson_statusFieldUpdateOperationsInput | $Enums.lesson_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: CourseSectionUpdateOneRequiredWithoutLessonsNestedInput
    CompletedLesson?: CompletedLessonUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutUserLessonsCompleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeVideoId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: Enumlesson_statusFieldUpdateOperationsInput | $Enums.lesson_status
    sectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CompletedLesson?: CompletedLessonUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type UserCreateWithoutCompletedLessonInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    Session?: SessionCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutCompletedLessonInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    referredById?: string | null
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessUncheckedCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionUncheckedCreateNestedManyWithoutReferrerInput
    commissionsEarned?: ReferralCommissionUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutCompletedLessonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompletedLessonInput, UserUncheckedCreateWithoutCompletedLessonInput>
  }

  export type LessonCreateWithoutCompletedLessonInput = {
    id?: string
    name: string
    description?: string | null
    youtubeVideoId: string
    order: number
    status?: $Enums.lesson_status
    createdAt?: Date | string
    updatedAt?: Date | string
    section: CourseSectionCreateNestedOneWithoutLessonsInput
    userLessonsComplete?: UserLessonCompleteCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutCompletedLessonInput = {
    id?: string
    name: string
    description?: string | null
    youtubeVideoId: string
    order: number
    status?: $Enums.lesson_status
    sectionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userLessonsComplete?: UserLessonCompleteUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutCompletedLessonInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutCompletedLessonInput, LessonUncheckedCreateWithoutCompletedLessonInput>
  }

  export type UserUpsertWithoutCompletedLessonInput = {
    update: XOR<UserUpdateWithoutCompletedLessonInput, UserUncheckedUpdateWithoutCompletedLessonInput>
    create: XOR<UserCreateWithoutCompletedLessonInput, UserUncheckedCreateWithoutCompletedLessonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompletedLessonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompletedLessonInput, UserUncheckedUpdateWithoutCompletedLessonInput>
  }

  export type UserUpdateWithoutCompletedLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutCompletedLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUncheckedUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUncheckedUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type LessonUpsertWithoutCompletedLessonInput = {
    update: XOR<LessonUpdateWithoutCompletedLessonInput, LessonUncheckedUpdateWithoutCompletedLessonInput>
    create: XOR<LessonCreateWithoutCompletedLessonInput, LessonUncheckedCreateWithoutCompletedLessonInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutCompletedLessonInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutCompletedLessonInput, LessonUncheckedUpdateWithoutCompletedLessonInput>
  }

  export type LessonUpdateWithoutCompletedLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeVideoId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: Enumlesson_statusFieldUpdateOperationsInput | $Enums.lesson_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: CourseSectionUpdateOneRequiredWithoutLessonsNestedInput
    userLessonsComplete?: UserLessonCompleteUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutCompletedLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeVideoId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: Enumlesson_statusFieldUpdateOperationsInput | $Enums.lesson_status
    sectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLessonsComplete?: UserLessonCompleteUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type UserCreateWithoutCommissionsGivenInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    Session?: SessionCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    commissionsEarned?: ReferralCommissionCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutCommissionsGivenInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    referredById?: string | null
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessUncheckedCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteUncheckedCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    commissionsEarned?: ReferralCommissionUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutCommissionsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommissionsGivenInput, UserUncheckedCreateWithoutCommissionsGivenInput>
  }

  export type UserCreateWithoutCommissionsEarnedInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    Session?: SessionCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionCreateNestedManyWithoutReferrerInput
  }

  export type UserUncheckedCreateWithoutCommissionsEarnedInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
    referredById?: string | null
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    UserCourseAccess?: UserCourseAccessUncheckedCreateNestedManyWithoutUserInput
    UserLessonComplete?: UserLessonCompleteUncheckedCreateNestedManyWithoutUserInput
    CompletedLesson?: CompletedLessonUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    commissionsGiven?: ReferralCommissionUncheckedCreateNestedManyWithoutReferrerInput
  }

  export type UserCreateOrConnectWithoutCommissionsEarnedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommissionsEarnedInput, UserUncheckedCreateWithoutCommissionsEarnedInput>
  }

  export type UserUpsertWithoutCommissionsGivenInput = {
    update: XOR<UserUpdateWithoutCommissionsGivenInput, UserUncheckedUpdateWithoutCommissionsGivenInput>
    create: XOR<UserCreateWithoutCommissionsGivenInput, UserUncheckedCreateWithoutCommissionsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommissionsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommissionsGivenInput, UserUncheckedUpdateWithoutCommissionsGivenInput>
  }

  export type UserUpdateWithoutCommissionsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    commissionsEarned?: ReferralCommissionUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutCommissionsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUncheckedUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUncheckedUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    commissionsEarned?: ReferralCommissionUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserUpsertWithoutCommissionsEarnedInput = {
    update: XOR<UserUpdateWithoutCommissionsEarnedInput, UserUncheckedUpdateWithoutCommissionsEarnedInput>
    create: XOR<UserCreateWithoutCommissionsEarnedInput, UserUncheckedCreateWithoutCommissionsEarnedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommissionsEarnedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommissionsEarnedInput, UserUncheckedUpdateWithoutCommissionsEarnedInput>
  }

  export type UserUpdateWithoutCommissionsEarnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUpdateManyWithoutReferrerNestedInput
  }

  export type UserUncheckedUpdateWithoutCommissionsEarnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUncheckedUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUncheckedUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUncheckedUpdateManyWithoutReferrerNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    expiresAt?: Date | string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
  }

  export type PurchaseCreateManyUserInput = {
    id?: string
    pricePaidInCents: number
    productDetails: JsonNullValueInput | InputJsonValue
    productId: string
    stripeSessionId: string
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseAccessCreateManyUserInput = {
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLessonCompleteCreateManyUserInput = {
    lessonId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedLessonCreateManyUserInput = {
    lessonId: string
    createdAt?: Date | string
  }

  export type UserCreateManyReferredByInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorEnabled?: boolean
    role?: $Enums.user_role
    referralCode?: string | null
  }

  export type ReferralCommissionCreateManyReferrerInput = {
    id?: string
    referredId: string
    amountInRupees: number
    status?: $Enums.ReferralCommissionStatus
    createdAt?: Date | string
  }

  export type ReferralCommissionCreateManyReferredInput = {
    id?: string
    referrerId: string
    amountInRupees: number
    status?: $Enums.ReferralCommissionStatus
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePaidInCents?: IntFieldUpdateOperationsInput | number
    productDetails?: JsonNullValueInput | InputJsonValue
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePaidInCents?: IntFieldUpdateOperationsInput | number
    productDetails?: JsonNullValueInput | InputJsonValue
    productId?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePaidInCents?: IntFieldUpdateOperationsInput | number
    productDetails?: JsonNullValueInput | InputJsonValue
    productId?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseAccessUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutUserCourseAccessNestedInput
  }

  export type UserCourseAccessUncheckedUpdateWithoutUserInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseAccessUncheckedUpdateManyWithoutUserInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLessonCompleteUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutUserLessonsCompleteNestedInput
  }

  export type UserLessonCompleteUncheckedUpdateWithoutUserInput = {
    lessonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLessonCompleteUncheckedUpdateManyWithoutUserInput = {
    lessonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedLessonUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutCompletedLessonNestedInput
  }

  export type CompletedLessonUncheckedUpdateWithoutUserInput = {
    lessonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedLessonUncheckedUpdateManyWithoutUserInput = {
    lessonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUpdateManyWithoutUserNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    UserCourseAccess?: UserCourseAccessUncheckedUpdateManyWithoutUserNestedInput
    UserLessonComplete?: UserLessonCompleteUncheckedUpdateManyWithoutUserNestedInput
    CompletedLesson?: CompletedLessonUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    commissionsGiven?: ReferralCommissionUncheckedUpdateManyWithoutReferrerNestedInput
    commissionsEarned?: ReferralCommissionUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateManyWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReferralCommissionUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInRupees?: IntFieldUpdateOperationsInput | number
    status?: EnumReferralCommissionStatusFieldUpdateOperationsInput | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referred?: UserUpdateOneRequiredWithoutCommissionsEarnedNestedInput
  }

  export type ReferralCommissionUncheckedUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    amountInRupees?: IntFieldUpdateOperationsInput | number
    status?: EnumReferralCommissionStatusFieldUpdateOperationsInput | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCommissionUncheckedUpdateManyWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    amountInRupees?: IntFieldUpdateOperationsInput | number
    status?: EnumReferralCommissionStatusFieldUpdateOperationsInput | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCommissionUpdateWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInRupees?: IntFieldUpdateOperationsInput | number
    status?: EnumReferralCommissionStatusFieldUpdateOperationsInput | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: UserUpdateOneRequiredWithoutCommissionsGivenNestedInput
  }

  export type ReferralCommissionUncheckedUpdateWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    amountInRupees?: IntFieldUpdateOperationsInput | number
    status?: EnumReferralCommissionStatusFieldUpdateOperationsInput | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCommissionUncheckedUpdateManyWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    amountInRupees?: IntFieldUpdateOperationsInput | number
    status?: EnumReferralCommissionStatusFieldUpdateOperationsInput | $Enums.ReferralCommissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProductCreateManyCourseInput = {
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseAccessCreateManyCourseInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseSectionCreateManyCourseInput = {
    id?: string
    name: string
    status?: $Enums.course_section_status
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseProductUpdateWithoutCourseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCourseProductsNestedInput
  }

  export type CourseProductUncheckedUpdateWithoutCourseInput = {
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProductUncheckedUpdateManyWithoutCourseInput = {
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseAccessUpdateWithoutCourseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserCourseAccessNestedInput
  }

  export type UserCourseAccessUncheckedUpdateWithoutCourseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseAccessUncheckedUpdateManyWithoutCourseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseSectionUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: Enumcourse_section_statusFieldUpdateOperationsInput | $Enums.course_section_status
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutSectionNestedInput
  }

  export type CourseSectionUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: Enumcourse_section_statusFieldUpdateOperationsInput | $Enums.course_section_status
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type CourseSectionUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: Enumcourse_section_statusFieldUpdateOperationsInput | $Enums.course_section_status
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateManySectionInput = {
    id?: string
    name: string
    description?: string | null
    youtubeVideoId: string
    order: number
    status?: $Enums.lesson_status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeVideoId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: Enumlesson_statusFieldUpdateOperationsInput | $Enums.lesson_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLessonsComplete?: UserLessonCompleteUpdateManyWithoutLessonNestedInput
    CompletedLesson?: CompletedLessonUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeVideoId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: Enumlesson_statusFieldUpdateOperationsInput | $Enums.lesson_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLessonsComplete?: UserLessonCompleteUncheckedUpdateManyWithoutLessonNestedInput
    CompletedLesson?: CompletedLessonUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeVideoId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: Enumlesson_statusFieldUpdateOperationsInput | $Enums.lesson_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLessonCompleteCreateManyLessonInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedLessonCreateManyLessonInput = {
    userId: string
    createdAt?: Date | string
  }

  export type UserLessonCompleteUpdateWithoutLessonInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserLessonCompleteNestedInput
  }

  export type UserLessonCompleteUncheckedUpdateWithoutLessonInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLessonCompleteUncheckedUpdateManyWithoutLessonInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedLessonUpdateWithoutLessonInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompletedLessonNestedInput
  }

  export type CompletedLessonUncheckedUpdateWithoutLessonInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedLessonUncheckedUpdateManyWithoutLessonInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProductCreateManyProductInput = {
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseCreateManyProductInput = {
    id?: string
    pricePaidInCents: number
    productDetails: JsonNullValueInput | InputJsonValue
    userId: string
    stripeSessionId: string
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseProductUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseProductsNestedInput
  }

  export type CourseProductUncheckedUpdateWithoutProductInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProductUncheckedUpdateManyWithoutProductInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePaidInCents?: IntFieldUpdateOperationsInput | number
    productDetails?: JsonNullValueInput | InputJsonValue
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePaidInCents?: IntFieldUpdateOperationsInput | number
    productDetails?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePaidInCents?: IntFieldUpdateOperationsInput | number
    productDetails?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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