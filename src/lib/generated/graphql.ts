/* eslint-disable */
import type { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: string; output: string };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: string; output: string };
  Hex: { input: unknown; output: unknown };
  /** Raw JSON value */
  Json: { input: unknown; output: unknown };
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: unknown; output: unknown };
  RGBAHue: { input: unknown; output: unknown };
  RGBATransparency: { input: unknown; output: unknown };
  /** Slate-compatible RichText AST */
  RichTextAST: { input: unknown; output: unknown };
};

export type Aggregate = {
  count: Scalars["Int"]["output"];
};

/** Asset system model */
export type Asset = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars["String"]["output"];
  galleryProduct: Array<Product>;
  /** The file handle */
  handle: Scalars["String"]["output"];
  /** The height of the file */
  height?: Maybe<Scalars["Float"]["output"]>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars["String"]["output"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars["Float"]["output"]>;
  /** System stage field */
  stage: Stage;
  thumbnailCategory: Array<Category>;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars["String"]["output"];
  /** The file width */
  width?: Maybe<Scalars["Float"]["output"]>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

/** Asset system model */
export type AssetGalleryProductArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetThumbnailCategoryArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CategoryWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  fileName: Scalars["String"]["input"];
  galleryProduct?: InputMaybe<ProductCreateManyInlineInput>;
  handle: Scalars["String"]["input"];
  height?: InputMaybe<Scalars["Float"]["input"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  thumbnailCategory?: InputMaybe<CategoryCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  fileName: Scalars["String"]["input"];
  handle: Scalars["String"]["input"];
  height?: InputMaybe<Scalars["Float"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  galleryProduct_every?: InputMaybe<ProductWhereInput>;
  galleryProduct_none?: InputMaybe<ProductWhereInput>;
  galleryProduct_some?: InputMaybe<ProductWhereInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  thumbnailCategory_every?: InputMaybe<CategoryWhereInput>;
  thumbnailCategory_none?: InputMaybe<CategoryWhereInput>;
  thumbnailCategory_some?: InputMaybe<CategoryWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HandleAsc = "handle_ASC",
  HandleDesc = "handle_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  galleryProduct?: InputMaybe<ProductUpdateManyInlineInput>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  thumbnailCategory?: InputMaybe<CategoryUpdateManyInlineInput>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  galleryProduct_every?: InputMaybe<ProductWhereInput>;
  galleryProduct_none?: InputMaybe<ProductWhereInput>;
  galleryProduct_some?: InputMaybe<ProductWhereInput>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  thumbnailCategory_every?: InputMaybe<CategoryWhereInput>;
  thumbnailCategory_none?: InputMaybe<CategoryWhereInput>;
  thumbnailCategory_some?: InputMaybe<CategoryWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars["Long"]["output"];
};

export type Cart = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Cart>;
  /** List of Cart versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  items: Array<CartitemsUnion>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type CartCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CartDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type CartHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type CartItemsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CartPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CartScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type CartUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CartConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CartWhereUniqueInput;
};

/** A connection to a list of items. */
export type CartConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CartEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CartCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  items?: InputMaybe<CartitemsUnionCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CartCreateManyInlineInput = {
  /** Connect multiple existing Cart documents */
  connect?: InputMaybe<Array<CartWhereUniqueInput>>;
  /** Create and connect multiple existing Cart documents */
  create?: InputMaybe<Array<CartCreateInput>>;
};

export type CartCreateOneInlineInput = {
  /** Connect one existing Cart document */
  connect?: InputMaybe<CartWhereUniqueInput>;
  /** Create and connect one Cart document */
  create?: InputMaybe<CartCreateInput>;
};

/** An edge in a connection. */
export type CartEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Cart;
};

export type CartItem = {
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  product?: Maybe<Product>;
  quantity: Scalars["Int"]["output"];
  /** System stage field */
  stage: Stage;
};

export type CartItemProductArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CartItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CartItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type CartItemConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CartItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CartItemCreateInput = {
  product?: InputMaybe<ProductCreateOneInlineInput>;
  quantity: Scalars["Int"]["input"];
};

export type CartItemCreateManyInlineInput = {
  /** Create and connect multiple existing CartItem documents */
  create?: InputMaybe<Array<CartItemCreateInput>>;
};

export type CartItemCreateOneInlineInput = {
  /** Create and connect one CartItem document */
  create?: InputMaybe<CartItemCreateInput>;
};

export type CartItemCreateWithPositionInput = {
  /** Document to create */
  data: CartItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CartItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: CartItem;
};

/** Identifies documents */
export type CartItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  product?: InputMaybe<ProductWhereInput>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  quantity_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export enum CartItemOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  QuantityAsc = "quantity_ASC",
  QuantityDesc = "quantity_DESC",
}

export type CartItemParent = Cart;

export type CartItemParentConnectInput = {
  Cart?: InputMaybe<CartConnectInput>;
};

export type CartItemParentCreateInput = {
  Cart?: InputMaybe<CartCreateInput>;
};

export type CartItemParentCreateManyInlineInput = {
  /** Connect multiple existing CartItemParent documents */
  connect?: InputMaybe<Array<CartItemParentWhereUniqueInput>>;
  /** Create and connect multiple existing CartItemParent documents */
  create?: InputMaybe<Array<CartItemParentCreateInput>>;
};

export type CartItemParentCreateOneInlineInput = {
  /** Connect one existing CartItemParent document */
  connect?: InputMaybe<CartItemParentWhereUniqueInput>;
  /** Create and connect one CartItemParent document */
  create?: InputMaybe<CartItemParentCreateInput>;
};

export type CartItemParentUpdateInput = {
  Cart?: InputMaybe<CartUpdateInput>;
};

export type CartItemParentUpdateManyInlineInput = {
  /** Connect multiple existing CartItemParent documents */
  connect?: InputMaybe<Array<CartItemParentConnectInput>>;
  /** Create and connect multiple CartItemParent documents */
  create?: InputMaybe<Array<CartItemParentCreateInput>>;
  /** Delete multiple CartItemParent documents */
  delete?: InputMaybe<Array<CartItemParentWhereUniqueInput>>;
  /** Disconnect multiple CartItemParent documents */
  disconnect?: InputMaybe<Array<CartItemParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CartItemParent documents */
  set?: InputMaybe<Array<CartItemParentWhereUniqueInput>>;
  /** Update multiple CartItemParent documents */
  update?: InputMaybe<Array<CartItemParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CartItemParent documents */
  upsert?: InputMaybe<Array<CartItemParentUpsertWithNestedWhereUniqueInput>>;
};

export type CartItemParentUpdateManyWithNestedWhereInput = {
  Cart?: InputMaybe<CartUpdateManyWithNestedWhereInput>;
};

export type CartItemParentUpdateOneInlineInput = {
  /** Connect existing CartItemParent document */
  connect?: InputMaybe<CartItemParentWhereUniqueInput>;
  /** Create and connect one CartItemParent document */
  create?: InputMaybe<CartItemParentCreateInput>;
  /** Delete currently connected CartItemParent document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected CartItemParent document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single CartItemParent document */
  update?: InputMaybe<CartItemParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CartItemParent document */
  upsert?: InputMaybe<CartItemParentUpsertWithNestedWhereUniqueInput>;
};

export type CartItemParentUpdateWithNestedWhereUniqueInput = {
  Cart?: InputMaybe<CartUpdateWithNestedWhereUniqueInput>;
};

export type CartItemParentUpsertWithNestedWhereUniqueInput = {
  Cart?: InputMaybe<CartUpsertWithNestedWhereUniqueInput>;
};

export type CartItemParentWhereInput = {
  Cart?: InputMaybe<CartWhereInput>;
};

export type CartItemParentWhereUniqueInput = {
  Cart?: InputMaybe<CartWhereUniqueInput>;
};

export type CartItemUpdateInput = {
  product?: InputMaybe<ProductUpdateOneInlineInput>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CartItemUpdateManyInlineInput = {
  /** Create and connect multiple CartItem component instances */
  create?: InputMaybe<Array<CartItemCreateWithPositionInput>>;
  /** Delete multiple CartItem documents */
  delete?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  /** Update multiple CartItem component instances */
  update?: InputMaybe<
    Array<CartItemUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple CartItem component instances */
  upsert?: InputMaybe<
    Array<CartItemUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type CartItemUpdateManyInput = {
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CartItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CartItemUpdateManyInput;
  /** Document search */
  where: CartItemWhereInput;
};

export type CartItemUpdateOneInlineInput = {
  /** Create and connect one CartItem document */
  create?: InputMaybe<CartItemCreateInput>;
  /** Delete currently connected CartItem document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single CartItem document */
  update?: InputMaybe<CartItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CartItem document */
  upsert?: InputMaybe<CartItemUpsertWithNestedWhereUniqueInput>;
};

export type CartItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CartItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CartItemUpdateInput;
  /** Unique document search */
  where: CartItemWhereUniqueInput;
};

export type CartItemUpsertInput = {
  /** Create document if it didn't exist */
  create: CartItemCreateInput;
  /** Update document if it exists */
  update: CartItemUpdateInput;
};

export type CartItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CartItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CartItemWhereUniqueInput;
};

export type CartItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CartItemUpsertInput;
  /** Unique document search */
  where: CartItemWhereUniqueInput;
};

/** Identifies documents */
export type CartItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  product?: InputMaybe<ProductWhereInput>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  quantity_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

/** References CartItem record uniquely */
export type CartItemWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Identifies documents */
export type CartManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CartWhereStageInput>;
  documentInStages_none?: InputMaybe<CartWhereStageInput>;
  documentInStages_some?: InputMaybe<CartWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values in which the union is empty. */
  items_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  items_some?: InputMaybe<CartitemsUnionWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CartOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type CartUpdateInput = {
  items?: InputMaybe<CartitemsUnionUpdateManyInlineInput>;
};

export type CartUpdateManyInlineInput = {
  /** Connect multiple existing Cart documents */
  connect?: InputMaybe<Array<CartConnectInput>>;
  /** Create and connect multiple Cart documents */
  create?: InputMaybe<Array<CartCreateInput>>;
  /** Delete multiple Cart documents */
  delete?: InputMaybe<Array<CartWhereUniqueInput>>;
  /** Disconnect multiple Cart documents */
  disconnect?: InputMaybe<Array<CartWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Cart documents */
  set?: InputMaybe<Array<CartWhereUniqueInput>>;
  /** Update multiple Cart documents */
  update?: InputMaybe<Array<CartUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Cart documents */
  upsert?: InputMaybe<Array<CartUpsertWithNestedWhereUniqueInput>>;
};

export type CartUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars["String"]["input"]>;
};

export type CartUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CartUpdateManyInput;
  /** Document search */
  where: CartWhereInput;
};

export type CartUpdateOneInlineInput = {
  /** Connect existing Cart document */
  connect?: InputMaybe<CartWhereUniqueInput>;
  /** Create and connect one Cart document */
  create?: InputMaybe<CartCreateInput>;
  /** Delete currently connected Cart document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Cart document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Cart document */
  update?: InputMaybe<CartUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Cart document */
  upsert?: InputMaybe<CartUpsertWithNestedWhereUniqueInput>;
};

export type CartUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CartUpdateInput;
  /** Unique document search */
  where: CartWhereUniqueInput;
};

export type CartUpsertInput = {
  /** Create document if it didn't exist */
  create: CartCreateInput;
  /** Update document if it exists */
  update: CartUpdateInput;
};

export type CartUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CartUpsertInput;
  /** Unique document search */
  where: CartWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CartWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type CartWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CartWhereStageInput>;
  documentInStages_none?: InputMaybe<CartWhereStageInput>;
  documentInStages_some?: InputMaybe<CartWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values in which the union is empty. */
  items_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  items_some?: InputMaybe<CartitemsUnionWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CartWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CartWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Cart record uniquely */
export type CartWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type CartitemsUnion = CartItem;

export type CartitemsUnionConnectInput = {
  CartItem?: InputMaybe<CartItemConnectInput>;
};

export type CartitemsUnionCreateInput = {
  CartItem?: InputMaybe<CartItemCreateInput>;
};

export type CartitemsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing CartitemsUnion documents */
  create?: InputMaybe<Array<CartitemsUnionCreateInput>>;
};

export type CartitemsUnionCreateOneInlineInput = {
  /** Create and connect one CartitemsUnion document */
  create?: InputMaybe<CartitemsUnionCreateInput>;
};

export type CartitemsUnionCreateWithPositionInput = {
  CartItem?: InputMaybe<CartItemCreateWithPositionInput>;
};

export type CartitemsUnionUpdateInput = {
  CartItem?: InputMaybe<CartItemUpdateInput>;
};

export type CartitemsUnionUpdateManyInlineInput = {
  /** Create and connect multiple CartitemsUnion component instances */
  create?: InputMaybe<Array<CartitemsUnionCreateWithPositionInput>>;
  /** Delete multiple CartitemsUnion documents */
  delete?: InputMaybe<Array<CartitemsUnionWhereUniqueInput>>;
  /** Update multiple CartitemsUnion component instances */
  update?: InputMaybe<
    Array<CartitemsUnionUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple CartitemsUnion component instances */
  upsert?: InputMaybe<
    Array<CartitemsUnionUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type CartitemsUnionUpdateManyWithNestedWhereInput = {
  CartItem?: InputMaybe<CartItemUpdateManyWithNestedWhereInput>;
};

export type CartitemsUnionUpdateOneInlineInput = {
  /** Create and connect one CartitemsUnion document */
  create?: InputMaybe<CartitemsUnionCreateInput>;
  /** Delete currently connected CartitemsUnion document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single CartitemsUnion document */
  update?: InputMaybe<CartitemsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CartitemsUnion document */
  upsert?: InputMaybe<CartitemsUnionUpsertWithNestedWhereUniqueInput>;
};

export type CartitemsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  CartItem?: InputMaybe<CartItemUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type CartitemsUnionUpdateWithNestedWhereUniqueInput = {
  CartItem?: InputMaybe<CartItemUpdateWithNestedWhereUniqueInput>;
};

export type CartitemsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  CartItem?: InputMaybe<CartItemUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type CartitemsUnionUpsertWithNestedWhereUniqueInput = {
  CartItem?: InputMaybe<CartItemUpsertWithNestedWhereUniqueInput>;
};

export type CartitemsUnionWhereInput = {
  CartItem?: InputMaybe<CartItemWhereInput>;
};

export type CartitemsUnionWhereUniqueInput = {
  CartItem?: InputMaybe<CartItemWhereUniqueInput>;
};

export type Category = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars["String"]["output"]>;
  /** Get the document in other stages */
  documentInStages: Array<Category>;
  /** List of Category versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Category>;
  name: Scalars["String"]["output"];
  products: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars["String"]["output"];
  /** System stage field */
  stage: Stage;
  thumbnail: Asset;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type CategoryCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type CategoryCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type CategoryHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type CategoryLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  locales?: Array<Locale>;
};

export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
};

export type CategoryPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type CategoryPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CategoryScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type CategoryThumbnailArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CategoryUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type CategoryUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CategoryCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** description input for default locale (pl) */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CategoryCreateLocalizationsInput>;
  /** name input for default locale (pl) */
  name: Scalars["String"]["input"];
  products?: InputMaybe<ProductCreateManyInlineInput>;
  slug: Scalars["String"]["input"];
  thumbnail: AssetCreateOneInlineInput;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CategoryCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CategoryCreateLocalizationInput = {
  /** Localization input */
  data: CategoryCreateLocalizationDataInput;
  locale: Locale;
};

export type CategoryCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CategoryCreateLocalizationInput>>;
};

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Create and connect multiple existing Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
};

/** An edge in a connection. */
export type CategoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Category;
};

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  thumbnail?: InputMaybe<AssetWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CategoryOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type CategoryUpdateInput = {
  /** description input for default locale (pl) */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<CategoryUpdateLocalizationsInput>;
  /** name input for default locale (pl) */
  name?: InputMaybe<Scalars["String"]["input"]>;
  products?: InputMaybe<ProductUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  thumbnail?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type CategoryUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type CategoryUpdateLocalizationInput = {
  data: CategoryUpdateLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CategoryCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<CategoryUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertLocalizationInput>>;
};

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryConnectInput>>;
  /** Create and connect multiple Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
  /** Delete multiple Category documents */
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  /** description input for default locale (pl) */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<CategoryUpdateManyLocalizationsInput>;
};

export type CategoryUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
};

export type CategoryUpdateManyLocalizationInput = {
  data: CategoryUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<CategoryUpdateManyLocalizationInput>>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategoryUpdateManyInput;
  /** Document search */
  where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
  /** Delete currently connected Category document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Category document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Category document */
  update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategoryUpdateInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput;
  /** Update document if it exists */
  update: CategoryUpdateInput;
};

export type CategoryUpsertLocalizationInput = {
  create: CategoryCreateLocalizationDataInput;
  locale: Locale;
  update: CategoryUpdateLocalizationDataInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategoryUpsertInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CategoryWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  thumbnail?: InputMaybe<AssetWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CategoryWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CategoryWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  css: Scalars["String"]["output"];
  hex: Scalars["Hex"]["output"];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars["Hex"]["input"]>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars["ID"]["input"]>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars["ID"]["input"]>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum Currency {
  Pln = "PLN",
}

export enum DocumentFileTypes {
  Doc = "doc",
  Docx = "docx",
  Html = "html",
  Jpg = "jpg",
  Odp = "odp",
  Ods = "ods",
  Odt = "odt",
  Pdf = "pdf",
  Png = "png",
  Ppt = "ppt",
  Pptx = "pptx",
  Svg = "svg",
  Txt = "txt",
  Webp = "webp",
  Xls = "xls",
  Xlsx = "xlsx",
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  createdAt: Scalars["DateTime"]["output"];
  data?: Maybe<Scalars["Json"]["output"]>;
  id: Scalars["ID"]["output"];
  revision: Scalars["Int"]["output"];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = "crop",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = "max",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = "scale",
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars["Int"]["input"]>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  En = "en",
  /** System locale */
  Pl = "pl",
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  distance: Scalars["Float"]["output"];
  latitude: Scalars["Float"]["output"];
  longitude: Scalars["Float"]["output"];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars["Float"]["input"];
  longitude: Scalars["Float"]["input"];
};

export type Mutation = {
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one cart */
  createCart?: Maybe<Cart>;
  /** Create one category */
  createCategory?: Maybe<Category>;
  /** Create one product */
  createProduct?: Maybe<Product>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one cart from _all_ existing stages. Returns deleted document. */
  deleteCart?: Maybe<Cart>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<Category>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Cart documents
   * @deprecated Please use the new paginated many mutation (deleteManyCartsConnection)
   */
  deleteManyCarts: BatchPayload;
  /** Delete many Cart documents, return deleted documents */
  deleteManyCartsConnection: CartConnection;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload;
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct?: Maybe<Product>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one cart */
  publishCart?: Maybe<Cart>;
  /** Publish one category */
  publishCategory?: Maybe<Category>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Cart documents
   * @deprecated Please use the new paginated many mutation (publishManyCartsConnection)
   */
  publishManyCarts: BatchPayload;
  /** Publish many Cart documents */
  publishManyCartsConnection: CartConnection;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload;
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /** Publish one product */
  publishProduct?: Maybe<Product>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one cart */
  schedulePublishCart?: Maybe<Cart>;
  /** Schedule to publish one category */
  schedulePublishCategory?: Maybe<Category>;
  /** Schedule to publish one product */
  schedulePublishProduct?: Maybe<Product>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one cart from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCart?: Maybe<Cart>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCategory?: Maybe<Category>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProduct?: Maybe<Product>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one cart from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCart?: Maybe<Cart>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<Category>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Cart documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCartsConnection)
   */
  unpublishManyCarts: BatchPayload;
  /** Find many Cart documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCartsConnection: CartConnection;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct?: Maybe<Product>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one cart */
  updateCart?: Maybe<Cart>;
  /** Update one category */
  updateCategory?: Maybe<Category>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many carts
   * @deprecated Please use the new paginated many mutation (updateManyCartsConnection)
   */
  updateManyCarts: BatchPayload;
  /** Update many Cart documents */
  updateManyCartsConnection: CartConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload;
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /** Update one product */
  updateProduct?: Maybe<Product>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one cart */
  upsertCart?: Maybe<Cart>;
  /** Upsert one category */
  upsertCategory?: Maybe<Category>;
  /** Upsert one product */
  upsertProduct?: Maybe<Product>;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationCreateCartArgs = {
  data: CartCreateInput;
};

export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};

export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationDeleteCartArgs = {
  where: CartWhereUniqueInput;
};

export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyCartsArgs = {
  where?: InputMaybe<CartManyWhereInput>;
};

export type MutationDeleteManyCartsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CartManyWhereInput>;
};

export type MutationDeleteManyCategoriesArgs = {
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationDeleteManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationDeleteManyProductsArgs = {
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationDeleteManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishCartArgs = {
  to?: Array<Stage>;
  where: CartWhereUniqueInput;
};

export type MutationPublishCategoryArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyCartsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CartManyWhereInput>;
};

export type MutationPublishManyCartsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<CartManyWhereInput>;
};

export type MutationPublishManyCategoriesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyProductsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationSchedulePublishCartArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: CartWhereUniqueInput;
};

export type MutationSchedulePublishCategoryArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationSchedulePublishProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishCartArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  where: CartWhereUniqueInput;
};

export type MutationScheduleUnpublishCategoryArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: CategoryWhereUniqueInput;
};

export type MutationScheduleUnpublishProductArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: ProductWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: AssetWhereUniqueInput;
};

export type MutationUnpublishCartArgs = {
  from?: Array<Stage>;
  where: CartWhereUniqueInput;
};

export type MutationUnpublishCategoryArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: CategoryWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyCartsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CartManyWhereInput>;
};

export type MutationUnpublishManyCartsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CartManyWhereInput>;
};

export type MutationUnpublishManyCategoriesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUnpublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUnpublishManyProductsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUnpublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUnpublishProductArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: ProductWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateCartArgs = {
  data: CartUpdateInput;
  where: CartWhereUniqueInput;
};

export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyCartsArgs = {
  data: CartUpdateManyInput;
  where?: InputMaybe<CartManyWhereInput>;
};

export type MutationUpdateManyCartsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: CartUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CartManyWhereInput>;
};

export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUpdateManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: CategoryUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateManyInput;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUpdateManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: ProductUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpsertCartArgs = {
  upsert: CartUpsertInput;
  where: CartWhereUniqueInput;
};

export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput;
  where: CategoryWhereUniqueInput;
};

export type MutationUpsertProductArgs = {
  upsert: ProductUpsertInput;
  where: ProductWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"]["output"];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars["Int"]["output"]>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Product = Node & {
  category?: Maybe<ProductCategory>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  currency: Currency;
  description: RichText;
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  gallery: Array<Asset>;
  /** List of Product versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Product>;
  name: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quantityAvailable: Scalars["Int"]["output"];
  scheduledIn: Array<ScheduledOperation>;
  seoDescription?: Maybe<Scalars["String"]["output"]>;
  seoTitle?: Maybe<Scalars["String"]["output"]>;
  slug: Scalars["String"]["output"];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type ProductCategoryArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProductCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type ProductGalleryArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AssetWhereInput>;
};

export type ProductHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type ProductLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  locales?: Array<Locale>;
};

export type ProductPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProductPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProductUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProductUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductCategory = Category;

export type ProductCategoryConnectInput = {
  Category?: InputMaybe<CategoryConnectInput>;
};

export type ProductCategoryCreateInput = {
  Category?: InputMaybe<CategoryCreateInput>;
};

export type ProductCategoryCreateManyInlineInput = {
  /** Connect multiple existing ProductCategory documents */
  connect?: InputMaybe<Array<ProductCategoryWhereUniqueInput>>;
  /** Create and connect multiple existing ProductCategory documents */
  create?: InputMaybe<Array<ProductCategoryCreateInput>>;
};

export type ProductCategoryCreateOneInlineInput = {
  /** Connect one existing ProductCategory document */
  connect?: InputMaybe<ProductCategoryWhereUniqueInput>;
  /** Create and connect one ProductCategory document */
  create?: InputMaybe<ProductCategoryCreateInput>;
};

export type ProductCategoryUpdateInput = {
  Category?: InputMaybe<CategoryUpdateInput>;
};

export type ProductCategoryUpdateManyInlineInput = {
  /** Connect multiple existing ProductCategory documents */
  connect?: InputMaybe<Array<ProductCategoryConnectInput>>;
  /** Create and connect multiple ProductCategory documents */
  create?: InputMaybe<Array<ProductCategoryCreateInput>>;
  /** Delete multiple ProductCategory documents */
  delete?: InputMaybe<Array<ProductCategoryWhereUniqueInput>>;
  /** Disconnect multiple ProductCategory documents */
  disconnect?: InputMaybe<Array<ProductCategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductCategory documents */
  set?: InputMaybe<Array<ProductCategoryWhereUniqueInput>>;
  /** Update multiple ProductCategory documents */
  update?: InputMaybe<Array<ProductCategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductCategory documents */
  upsert?: InputMaybe<Array<ProductCategoryUpsertWithNestedWhereUniqueInput>>;
};

export type ProductCategoryUpdateManyWithNestedWhereInput = {
  Category?: InputMaybe<CategoryUpdateManyWithNestedWhereInput>;
};

export type ProductCategoryUpdateOneInlineInput = {
  /** Connect existing ProductCategory document */
  connect?: InputMaybe<ProductCategoryWhereUniqueInput>;
  /** Create and connect one ProductCategory document */
  create?: InputMaybe<ProductCategoryCreateInput>;
  /** Delete currently connected ProductCategory document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected ProductCategory document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single ProductCategory document */
  update?: InputMaybe<ProductCategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductCategory document */
  upsert?: InputMaybe<ProductCategoryUpsertWithNestedWhereUniqueInput>;
};

export type ProductCategoryUpdateWithNestedWhereUniqueInput = {
  Category?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
};

export type ProductCategoryUpsertWithNestedWhereUniqueInput = {
  Category?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type ProductCategoryWhereInput = {
  Category?: InputMaybe<CategoryWhereInput>;
};

export type ProductCategoryWhereUniqueInput = {
  Category?: InputMaybe<CategoryWhereUniqueInput>;
};

export type ProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductCreateInput = {
  category?: InputMaybe<ProductCategoryCreateOneInlineInput>;
  cllmthjzj1wmr01t77f7a3xf6?: InputMaybe<CartItemCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  currency: Currency;
  /** description input for default locale (pl) */
  description: Scalars["RichTextAST"]["input"];
  gallery: AssetCreateManyInlineInput;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProductCreateLocalizationsInput>;
  /** name input for default locale (pl) */
  name: Scalars["String"]["input"];
  price: Scalars["Float"]["input"];
  quantityAvailable: Scalars["Int"]["input"];
  /** seoDescription input for default locale (pl) */
  seoDescription?: InputMaybe<Scalars["String"]["input"]>;
  /** seoTitle input for default locale (pl) */
  seoTitle?: InputMaybe<Scalars["String"]["input"]>;
  slug: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ProductCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description: Scalars["RichTextAST"]["input"];
  name: Scalars["String"]["input"];
  seoDescription?: InputMaybe<Scalars["String"]["input"]>;
  seoTitle?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ProductCreateLocalizationInput = {
  /** Localization input */
  data: ProductCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
};

export type ProductCreateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Connect one existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Product;
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  /** All values in which the union is connected to the given models */
  category?: InputMaybe<ProductCategoryWhereInput>;
  /** All values in which the union is empty */
  category_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  currency?: InputMaybe<Currency>;
  /** All values that are contained in given list. */
  currency_in?: InputMaybe<Array<InputMaybe<Currency>>>;
  /** Any other value that exists and is not equal to the given value. */
  currency_not?: InputMaybe<Currency>;
  /** All values that are not contained in given list. */
  currency_not_in?: InputMaybe<Array<InputMaybe<Currency>>>;
  documentInStages_every?: InputMaybe<ProductWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductWhereStageInput>;
  gallery_every?: InputMaybe<AssetWhereInput>;
  gallery_none?: InputMaybe<AssetWhereInput>;
  gallery_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  price_not?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantityAvailable?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  quantityAvailable_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  quantityAvailable_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  quantityAvailable_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  quantityAvailable_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  quantityAvailable_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  quantityAvailable_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  quantityAvailable_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["Int"]["input"]>>
  >;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProductOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  CurrencyAsc = "currency_ASC",
  CurrencyDesc = "currency_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  QuantityAvailableAsc = "quantityAvailable_ASC",
  QuantityAvailableDesc = "quantityAvailable_DESC",
  SeoDescriptionAsc = "seoDescription_ASC",
  SeoDescriptionDesc = "seoDescription_DESC",
  SeoTitleAsc = "seoTitle_ASC",
  SeoTitleDesc = "seoTitle_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ProductUpdateInput = {
  category?: InputMaybe<ProductCategoryUpdateOneInlineInput>;
  cllmthjzj1wmr01t77f7a3xf6?: InputMaybe<CartItemUpdateManyInlineInput>;
  currency?: InputMaybe<Currency>;
  /** description input for default locale (pl) */
  description?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  gallery?: InputMaybe<AssetUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<ProductUpdateLocalizationsInput>;
  /** name input for default locale (pl) */
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  quantityAvailable?: InputMaybe<Scalars["Int"]["input"]>;
  /** seoDescription input for default locale (pl) */
  seoDescription?: InputMaybe<Scalars["String"]["input"]>;
  /** seoTitle input for default locale (pl) */
  seoTitle?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  seoDescription?: InputMaybe<Scalars["String"]["input"]>;
  seoTitle?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductUpdateLocalizationInput = {
  data: ProductUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ProductUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ProductUpsertLocalizationInput>>;
};

export type ProductUpdateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductConnectInput>>;
  /** Create and connect multiple Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
  currency?: InputMaybe<Currency>;
  /** description input for default locale (pl) */
  description?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProductUpdateManyLocalizationsInput>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  quantityAvailable?: InputMaybe<Scalars["Int"]["input"]>;
  /** seoDescription input for default locale (pl) */
  seoDescription?: InputMaybe<Scalars["String"]["input"]>;
  /** seoTitle input for default locale (pl) */
  seoTitle?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  seoDescription?: InputMaybe<Scalars["String"]["input"]>;
  seoTitle?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductUpdateManyLocalizationInput = {
  data: ProductUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProductUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ProductUpdateManyLocalizationInput>>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductUpdateManyInput;
  /** Document search */
  where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
  /** Connect existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Product document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Product document */
  update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductUpdateInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertLocalizationInput = {
  create: ProductCreateLocalizationDataInput;
  locale: Locale;
  update: ProductUpdateLocalizationDataInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductUpsertInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  /** All values in which the union is connected to the given models */
  category?: InputMaybe<ProductCategoryWhereInput>;
  /** All values in which the union is empty */
  category_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  currency?: InputMaybe<Currency>;
  /** All values that are contained in given list. */
  currency_in?: InputMaybe<Array<InputMaybe<Currency>>>;
  /** Any other value that exists and is not equal to the given value. */
  currency_not?: InputMaybe<Currency>;
  /** All values that are not contained in given list. */
  currency_not_in?: InputMaybe<Array<InputMaybe<Currency>>>;
  documentInStages_every?: InputMaybe<ProductWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductWhereStageInput>;
  gallery_every?: InputMaybe<AssetWhereInput>;
  gallery_none?: InputMaybe<AssetWhereInput>;
  gallery_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  price_not?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantityAvailable?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  quantityAvailable_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  quantityAvailable_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  quantityAvailable_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  quantityAvailable_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  quantityAvailable_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  quantityAvailable_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  quantityAvailable_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["Int"]["input"]>>
  >;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seoDescription?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  seoDescription_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  seoDescription_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  seoDescription_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  seoDescription_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  seoDescription_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  seoDescription_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  seoDescription_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  seoDescription_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  seoDescription_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  seoTitle?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  seoTitle_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  seoTitle_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  seoTitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  seoTitle_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  seoTitle_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  seoTitle_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  seoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  seoTitle_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  seoTitle_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single cart */
  cart?: Maybe<Cart>;
  /** Retrieve document version */
  cartVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple carts */
  carts: Array<Cart>;
  /** Retrieve multiple carts using the Relay connection interface */
  cartsConnection: CartConnection;
  /** Retrieve multiple categories */
  categories: Array<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection;
  /** Retrieve a single category */
  category?: Maybe<Category>;
  /** Retrieve document version */
  categoryVersion?: Maybe<DocumentVersion>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single product */
  product?: Maybe<Product>;
  /** Retrieve document version */
  productVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};

export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryCartArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CartWhereUniqueInput;
};

export type QueryCartVersionArgs = {
  where: VersionWhereInput;
};

export type QueryCartsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CartOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<CartWhereInput>;
};

export type QueryCartsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CartOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<CartWhereInput>;
};

export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};

export type QueryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};

export type QueryCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CategoryWhereUniqueInput;
};

export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};

export type QueryNodeArgs = {
  id: Scalars["ID"]["input"];
  locales?: Array<Locale>;
  stage?: Stage;
};

export type QueryProductArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductWhereUniqueInput;
};

export type QueryProductVersionArgs = {
  where: VersionWhereInput;
};

export type QueryProductsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryProductsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  a: Scalars["RGBATransparency"]["output"];
  b: Scalars["RGBAHue"]["output"];
  g: Scalars["RGBAHue"]["output"];
  r: Scalars["RGBAHue"]["output"];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars["RGBATransparency"]["input"];
  b: Scalars["RGBAHue"]["input"];
  g: Scalars["RGBAHue"]["input"];
  r: Scalars["RGBAHue"]["input"];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns HTMl representation */
  html: Scalars["String"]["output"];
  /** Returns Markdown representation */
  markdown: Scalars["String"]["output"];
  /** Returns AST representation */
  raw: Scalars["RichTextAST"]["output"];
  /** Returns plain-text contents of RichText */
  text: Scalars["String"]["output"];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars["Json"]["output"];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument =
  | Asset
  | Cart
  | Category
  | Product;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars["Json"]["input"]>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = "CANCELED",
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars["Json"]["input"]>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** Whether scheduled release should be run */
  isActive: Scalars["Boolean"]["output"];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars["Boolean"]["output"];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars["String"]["output"]>;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  IsImplicitAsc = "isImplicit_ASC",
  IsImplicitDesc = "isImplicit_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  ReleaseAtAsc = "releaseAt_ASC",
  ReleaseAtDesc = "releaseAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = "DRAFT",
  /** The Published stage is where you can publish your content to. */
  Published = "PUBLISHED",
}

export enum SystemDateTimeFieldVariation {
  Base = "BASE",
  Combined = "COMBINED",
  Localization = "LOCALIZATION",
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** Flag to determine if user is active or not */
  isActive: Scalars["Boolean"]["output"];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars["String"]["output"];
  /** Profile Picture url */
  picture?: Maybe<Scalars["String"]["output"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
};

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = "APP_TOKEN",
  Member = "MEMBER",
  Pat = "PAT",
  Public = "PUBLIC",
  Webhook = "WEBHOOK",
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  picture?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
};

export enum UserOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  KindAsc = "kind_ASC",
  KindDesc = "kind_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PictureAsc = "picture_ASC",
  PictureDesc = "picture_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  picture?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Version = {
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  revision: Scalars["Int"]["output"];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars["ID"]["input"];
  revision: Scalars["Int"]["input"];
  stage: Stage;
};

export enum _FilterKind {
  And = "AND",
  Not = "NOT",
  Or = "OR",
  Contains = "contains",
  ContainsAll = "contains_all",
  ContainsNone = "contains_none",
  ContainsSome = "contains_some",
  EndsWith = "ends_with",
  Eq = "eq",
  EqNot = "eq_not",
  Gt = "gt",
  Gte = "gte",
  In = "in",
  JsonPathExists = "json_path_exists",
  JsonValueRecursive = "json_value_recursive",
  Lt = "lt",
  Lte = "lte",
  NotContains = "not_contains",
  NotEndsWith = "not_ends_with",
  NotIn = "not_in",
  NotStartsWith = "not_starts_with",
  RelationalEvery = "relational_every",
  RelationalNone = "relational_none",
  RelationalSingle = "relational_single",
  RelationalSome = "relational_some",
  Search = "search",
  StartsWith = "starts_with",
  UnionEmpty = "union_empty",
  UnionEvery = "union_every",
  UnionNone = "union_none",
  UnionSingle = "union_single",
  UnionSome = "union_some",
}

export enum _MutationInputFieldKind {
  Enum = "enum",
  Relation = "relation",
  RichText = "richText",
  RichTextWithEmbeds = "richTextWithEmbeds",
  Scalar = "scalar",
  Union = "union",
  Virtual = "virtual",
}

export enum _MutationKind {
  Create = "create",
  Delete = "delete",
  DeleteMany = "deleteMany",
  Publish = "publish",
  PublishMany = "publishMany",
  SchedulePublish = "schedulePublish",
  ScheduleUnpublish = "scheduleUnpublish",
  Unpublish = "unpublish",
  UnpublishMany = "unpublishMany",
  Update = "update",
  UpdateMany = "updateMany",
  Upsert = "upsert",
}

export enum _OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export enum _RelationInputCardinality {
  Many = "many",
  One = "one",
}

export enum _RelationInputKind {
  Create = "create",
  Update = "update",
}

export enum _RelationKind {
  Regular = "regular",
  Union = "union",
}

export enum _SystemDateTimeFieldVariation {
  Base = "base",
  Combined = "combined",
  Localization = "localization",
}

export type CartFragment = {
  id: string;
  items: Array<{
    id: string;
    quantity: number;
    product?: {
      id: string;
      name: string;
      slug: string;
      price: number;
      currency: Currency;
      quantityAvailable: number;
      updatedAt: string;
      createdAt: string;
      gallery: Array<{
        id: string;
        mimeType?: string | null;
        url: string;
        width?: number | null;
        height?: number | null;
        fileName: string;
      }>;
      category?: {
        id: string;
        name: string;
        slug: string;
        description?: string | null;
        thumbnail: {
          id: string;
          mimeType?: string | null;
          url: string;
          width?: number | null;
          height?: number | null;
          fileName: string;
        };
      } | null;
    } | null;
  }>;
};

export type CategoryDetailsFragment = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  thumbnail: {
    id: string;
    mimeType?: string | null;
    url: string;
    width?: number | null;
    height?: number | null;
    fileName: string;
  };
};

export type ImageDetailsFragment = {
  id: string;
  mimeType?: string | null;
  url: string;
  width?: number | null;
  height?: number | null;
  fileName: string;
};

export type ProductDetailsFragment = {
  id: string;
  name: string;
  slug: string;
  price: number;
  currency: Currency;
  quantityAvailable: number;
  seoTitle?: string | null;
  seoDescription?: string | null;
  updatedAt: string;
  createdAt: string;
  description: { html: string };
  category?: {
    id: string;
    name: string;
    slug: string;
    description?: string | null;
    thumbnail: {
      id: string;
      mimeType?: string | null;
      url: string;
      width?: number | null;
      height?: number | null;
      fileName: string;
    };
  } | null;
  gallery: Array<{
    id: string;
    mimeType?: string | null;
    url: string;
    width?: number | null;
    height?: number | null;
    fileName: string;
  }>;
};

export type ProductSummaryFragment = {
  id: string;
  name: string;
  slug: string;
  price: number;
  currency: Currency;
  quantityAvailable: number;
  updatedAt: string;
  createdAt: string;
  gallery: Array<{
    id: string;
    mimeType?: string | null;
    url: string;
    width?: number | null;
    height?: number | null;
    fileName: string;
  }>;
  category?: {
    id: string;
    name: string;
    slug: string;
    description?: string | null;
    thumbnail: {
      id: string;
      mimeType?: string | null;
      url: string;
      width?: number | null;
      height?: number | null;
      fileName: string;
    };
  } | null;
};

export type AddItemToCartMutationVariables = Exact<{
  cartId: Scalars["ID"]["input"];
  productQty: Scalars["Int"]["input"];
  productId: Scalars["ID"]["input"];
}>;

export type AddItemToCartMutation = {
  updateCart?: {
    id: string;
    items: Array<{
      id: string;
      quantity: number;
      product?: {
        id: string;
        name: string;
        slug: string;
        price: number;
        currency: Currency;
        quantityAvailable: number;
        updatedAt: string;
        createdAt: string;
        gallery: Array<{
          id: string;
          mimeType?: string | null;
          url: string;
          width?: number | null;
          height?: number | null;
          fileName: string;
        }>;
        category?: {
          id: string;
          name: string;
          slug: string;
          description?: string | null;
          thumbnail: {
            id: string;
            mimeType?: string | null;
            url: string;
            width?: number | null;
            height?: number | null;
            fileName: string;
          };
        } | null;
      } | null;
    }>;
  } | null;
};

export type CreateEmptyCartMutationVariables = Exact<{ [key: string]: never }>;

export type CreateEmptyCartMutation = {
  createCart?: {
    id: string;
    items: Array<{
      id: string;
      quantity: number;
      product?: {
        id: string;
        name: string;
        slug: string;
        price: number;
        currency: Currency;
        quantityAvailable: number;
        updatedAt: string;
        createdAt: string;
        gallery: Array<{
          id: string;
          mimeType?: string | null;
          url: string;
          width?: number | null;
          height?: number | null;
          fileName: string;
        }>;
        category?: {
          id: string;
          name: string;
          slug: string;
          description?: string | null;
          thumbnail: {
            id: string;
            mimeType?: string | null;
            url: string;
            width?: number | null;
            height?: number | null;
            fileName: string;
          };
        } | null;
      } | null;
    }>;
  } | null;
};

export type DeteteCartItemMutationVariables = Exact<{
  cartId: Scalars["ID"]["input"];
  itemId: Scalars["ID"]["input"];
}>;

export type DeteteCartItemMutation = {
  updateCart?: {
    id: string;
    items: Array<{
      id: string;
      quantity: number;
      product?: {
        id: string;
        name: string;
        slug: string;
        price: number;
        currency: Currency;
        quantityAvailable: number;
        updatedAt: string;
        createdAt: string;
        gallery: Array<{
          id: string;
          mimeType?: string | null;
          url: string;
          width?: number | null;
          height?: number | null;
          fileName: string;
        }>;
        category?: {
          id: string;
          name: string;
          slug: string;
          description?: string | null;
          thumbnail: {
            id: string;
            mimeType?: string | null;
            url: string;
            width?: number | null;
            height?: number | null;
            fileName: string;
          };
        } | null;
      } | null;
    }>;
  } | null;
};

export type UpdateCartItemQuantityMutationVariables = Exact<{
  cartId: Scalars["ID"]["input"];
  itemId: Scalars["ID"]["input"];
  qty: Scalars["Int"]["input"];
}>;

export type UpdateCartItemQuantityMutation = {
  update?: {
    id: string;
    items: Array<{
      id: string;
      quantity: number;
      product?: {
        id: string;
        name: string;
        slug: string;
        price: number;
        currency: Currency;
        quantityAvailable: number;
        updatedAt: string;
        createdAt: string;
        gallery: Array<{
          id: string;
          mimeType?: string | null;
          url: string;
          width?: number | null;
          height?: number | null;
          fileName: string;
        }>;
        category?: {
          id: string;
          name: string;
          slug: string;
          description?: string | null;
          thumbnail: {
            id: string;
            mimeType?: string | null;
            url: string;
            width?: number | null;
            height?: number | null;
            fileName: string;
          };
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetAllProductsQueryVariables = Exact<{
  limit: Scalars["Int"]["input"];
  skip: Scalars["Int"]["input"];
  order?: InputMaybe<ProductOrderByInput>;
  searchQuery?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetAllProductsQuery = {
  products: Array<{
    id: string;
    name: string;
    slug: string;
    price: number;
    currency: Currency;
    quantityAvailable: number;
    updatedAt: string;
    createdAt: string;
    gallery: Array<{
      id: string;
      mimeType?: string | null;
      url: string;
      width?: number | null;
      height?: number | null;
      fileName: string;
    }>;
    category?: {
      id: string;
      name: string;
      slug: string;
      description?: string | null;
      thumbnail: {
        id: string;
        mimeType?: string | null;
        url: string;
        width?: number | null;
        height?: number | null;
        fileName: string;
      };
    } | null;
  }>;
  productsConnection: { aggregate: { count: number } };
};

export type GetCartByIdQueryVariables = Exact<{
  cartId: Scalars["ID"]["input"];
}>;

export type GetCartByIdQuery = {
  cart?: {
    id: string;
    items: Array<{
      id: string;
      quantity: number;
      product?: {
        id: string;
        name: string;
        slug: string;
        price: number;
        currency: Currency;
        quantityAvailable: number;
        updatedAt: string;
        createdAt: string;
        gallery: Array<{
          id: string;
          mimeType?: string | null;
          url: string;
          width?: number | null;
          height?: number | null;
          fileName: string;
        }>;
        category?: {
          id: string;
          name: string;
          slug: string;
          description?: string | null;
          thumbnail: {
            id: string;
            mimeType?: string | null;
            url: string;
            width?: number | null;
            height?: number | null;
            fileName: string;
          };
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCategoriesQuery = {
  categories: Array<{
    id: string;
    name: string;
    slug: string;
    description?: string | null;
    thumbnail: {
      id: string;
      mimeType?: string | null;
      url: string;
      width?: number | null;
      height?: number | null;
      fileName: string;
    };
  }>;
};

export type GetCategoryNameBySlugQueryVariables = Exact<{
  categorySlug: Scalars["String"]["input"];
}>;

export type GetCategoryNameBySlugQuery = {
  category?: {
    id: string;
    name: string;
    slug: string;
    description?: string | null;
    thumbnail: {
      id: string;
      mimeType?: string | null;
      url: string;
      width?: number | null;
      height?: number | null;
      fileName: string;
    };
  } | null;
};

export type GetProductBySlugQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type GetProductBySlugQuery = {
  product?: {
    id: string;
    name: string;
    slug: string;
    price: number;
    currency: Currency;
    quantityAvailable: number;
    seoTitle?: string | null;
    seoDescription?: string | null;
    updatedAt: string;
    createdAt: string;
    description: { html: string };
    category?: {
      id: string;
      name: string;
      slug: string;
      description?: string | null;
      thumbnail: {
        id: string;
        mimeType?: string | null;
        url: string;
        width?: number | null;
        height?: number | null;
        fileName: string;
      };
    } | null;
    gallery: Array<{
      id: string;
      mimeType?: string | null;
      url: string;
      width?: number | null;
      height?: number | null;
      fileName: string;
    }>;
  } | null;
};

export type GetProductsByCategorySlugQueryVariables = Exact<{
  categorySlug: Scalars["String"]["input"];
  limit: Scalars["Int"]["input"];
  skip: Scalars["Int"]["input"];
  order?: InputMaybe<ProductOrderByInput>;
}>;

export type GetProductsByCategorySlugQuery = {
  products: Array<{
    id: string;
    name: string;
    slug: string;
    price: number;
    currency: Currency;
    quantityAvailable: number;
    updatedAt: string;
    createdAt: string;
    gallery: Array<{
      id: string;
      mimeType?: string | null;
      url: string;
      width?: number | null;
      height?: number | null;
      fileName: string;
    }>;
    category?: {
      id: string;
      name: string;
      slug: string;
      description?: string | null;
      thumbnail: {
        id: string;
        mimeType?: string | null;
        url: string;
        width?: number | null;
        height?: number | null;
        fileName: string;
      };
    } | null;
  }>;
  productsConnection: { aggregate: { count: number } };
};

export type GetProductsByIdsQueryVariables = Exact<{
  ids:
    | Array<InputMaybe<Scalars["ID"]["input"]>>
    | InputMaybe<Scalars["ID"]["input"]>;
}>;

export type GetProductsByIdsQuery = {
  products: Array<{
    id: string;
    name: string;
    slug: string;
    price: number;
    currency: Currency;
    quantityAvailable: number;
    updatedAt: string;
    createdAt: string;
    gallery: Array<{
      id: string;
      mimeType?: string | null;
      url: string;
      width?: number | null;
      height?: number | null;
      fileName: string;
    }>;
    category?: {
      id: string;
      name: string;
      slug: string;
      description?: string | null;
      thumbnail: {
        id: string;
        mimeType?: string | null;
        url: string;
        width?: number | null;
        height?: number | null;
        fileName: string;
      };
    } | null;
  }>;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

  constructor(
    private value: string,
    public __meta__?: Record<string, any>,
  ) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ImageDetailsFragmentDoc = new TypedDocumentString(
  `
    fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}
    `,
  { fragmentName: "ImageDetails" },
) as unknown as TypedDocumentString<ImageDetailsFragment, unknown>;
export const CategoryDetailsFragmentDoc = new TypedDocumentString(
  `
    fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
    fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}`,
  { fragmentName: "CategoryDetails" },
) as unknown as TypedDocumentString<CategoryDetailsFragment, unknown>;
export const ProductSummaryFragmentDoc = new TypedDocumentString(
  `
    fragment ProductSummary on Product {
  id
  name
  slug
  price
  currency
  gallery(first: 1) {
    ...ImageDetails
  }
  quantityAvailable
  category {
    ...CategoryDetails
  }
  updatedAt
  createdAt
}
    fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}`,
  { fragmentName: "ProductSummary" },
) as unknown as TypedDocumentString<ProductSummaryFragment, unknown>;
export const CartFragmentDoc = new TypedDocumentString(
  `
    fragment Cart on Cart {
  id
  items(first: 100) {
    ... on CartItem {
      id
      quantity
      product {
        ...ProductSummary
      }
    }
  }
}
    fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}
fragment ProductSummary on Product {
  id
  name
  slug
  price
  currency
  gallery(first: 1) {
    ...ImageDetails
  }
  quantityAvailable
  category {
    ...CategoryDetails
  }
  updatedAt
  createdAt
}`,
  { fragmentName: "Cart" },
) as unknown as TypedDocumentString<CartFragment, unknown>;
export const ProductDetailsFragmentDoc = new TypedDocumentString(
  `
    fragment ProductDetails on Product {
  id
  name
  slug
  description {
    html
  }
  category {
    ...CategoryDetails
  }
  price
  currency
  gallery {
    ...ImageDetails
  }
  quantityAvailable
  seoTitle
  seoDescription
  updatedAt
  createdAt
}
    fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}`,
  { fragmentName: "ProductDetails" },
) as unknown as TypedDocumentString<ProductDetailsFragment, unknown>;
export const AddItemToCartDocument = new TypedDocumentString(`
    mutation AddItemToCart($cartId: ID!, $productQty: Int!, $productId: ID!) {
  updateCart(
    where: {id: $cartId}
    data: {items: {create: {CartItem: {data: {quantity: $productQty, product: {connect: {id: $productId}}}}}}}
  ) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items(first: 100) {
    ... on CartItem {
      id
      quantity
      product {
        ...ProductSummary
      }
    }
  }
}
fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}
fragment ProductSummary on Product {
  id
  name
  slug
  price
  currency
  gallery(first: 1) {
    ...ImageDetails
  }
  quantityAvailable
  category {
    ...CategoryDetails
  }
  updatedAt
  createdAt
}`) as unknown as TypedDocumentString<
  AddItemToCartMutation,
  AddItemToCartMutationVariables
>;
export const CreateEmptyCartDocument = new TypedDocumentString(`
    mutation CreateEmptyCart {
  createCart(data: {items: {}}) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items(first: 100) {
    ... on CartItem {
      id
      quantity
      product {
        ...ProductSummary
      }
    }
  }
}
fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}
fragment ProductSummary on Product {
  id
  name
  slug
  price
  currency
  gallery(first: 1) {
    ...ImageDetails
  }
  quantityAvailable
  category {
    ...CategoryDetails
  }
  updatedAt
  createdAt
}`) as unknown as TypedDocumentString<
  CreateEmptyCartMutation,
  CreateEmptyCartMutationVariables
>;
export const DeteteCartItemDocument = new TypedDocumentString(`
    mutation DeteteCartItem($cartId: ID!, $itemId: ID!) {
  updateCart(
    where: {id: $cartId}
    data: {items: {delete: {CartItem: {id: $itemId}}}}
  ) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items(first: 100) {
    ... on CartItem {
      id
      quantity
      product {
        ...ProductSummary
      }
    }
  }
}
fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}
fragment ProductSummary on Product {
  id
  name
  slug
  price
  currency
  gallery(first: 1) {
    ...ImageDetails
  }
  quantityAvailable
  category {
    ...CategoryDetails
  }
  updatedAt
  createdAt
}`) as unknown as TypedDocumentString<
  DeteteCartItemMutation,
  DeteteCartItemMutationVariables
>;
export const UpdateCartItemQuantityDocument = new TypedDocumentString(`
    mutation UpdateCartItemQuantity($cartId: ID!, $itemId: ID!, $qty: Int!) {
  update: updateCart(
    where: {id: $cartId}
    data: {items: {update: [{CartItem: {where: {id: $itemId}, data: {quantity: $qty}}}]}}
  ) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items(first: 100) {
    ... on CartItem {
      id
      quantity
      product {
        ...ProductSummary
      }
    }
  }
}
fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}
fragment ProductSummary on Product {
  id
  name
  slug
  price
  currency
  gallery(first: 1) {
    ...ImageDetails
  }
  quantityAvailable
  category {
    ...CategoryDetails
  }
  updatedAt
  createdAt
}`) as unknown as TypedDocumentString<
  UpdateCartItemQuantityMutation,
  UpdateCartItemQuantityMutationVariables
>;
export const GetAllProductsDocument = new TypedDocumentString(`
    query GetAllProducts($limit: Int!, $skip: Int!, $order: ProductOrderByInput = price_DESC, $searchQuery: String) {
  products(
    stage: PUBLISHED
    locales: pl
    first: $limit
    skip: $skip
    orderBy: $order
    where: {name_contains: $searchQuery}
  ) {
    ...ProductSummary
  }
  productsConnection(stage: PUBLISHED, where: {name_contains: $searchQuery}) {
    aggregate {
      count
    }
  }
}
    fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}
fragment ProductSummary on Product {
  id
  name
  slug
  price
  currency
  gallery(first: 1) {
    ...ImageDetails
  }
  quantityAvailable
  category {
    ...CategoryDetails
  }
  updatedAt
  createdAt
}`) as unknown as TypedDocumentString<
  GetAllProductsQuery,
  GetAllProductsQueryVariables
>;
export const GetCartByIdDocument = new TypedDocumentString(`
    query GetCartById($cartId: ID!) {
  cart(where: {id: $cartId}) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items(first: 100) {
    ... on CartItem {
      id
      quantity
      product {
        ...ProductSummary
      }
    }
  }
}
fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}
fragment ProductSummary on Product {
  id
  name
  slug
  price
  currency
  gallery(first: 1) {
    ...ImageDetails
  }
  quantityAvailable
  category {
    ...CategoryDetails
  }
  updatedAt
  createdAt
}`) as unknown as TypedDocumentString<
  GetCartByIdQuery,
  GetCartByIdQueryVariables
>;
export const GetCategoriesDocument = new TypedDocumentString(`
    query GetCategories {
  categories(stage: PUBLISHED, first: 100) {
    ...CategoryDetails
  }
}
    fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}`) as unknown as TypedDocumentString<
  GetCategoriesQuery,
  GetCategoriesQueryVariables
>;
export const GetCategoryNameBySlugDocument = new TypedDocumentString(`
    query GetCategoryNameBySlug($categorySlug: String!) {
  category(stage: PUBLISHED, where: {slug: $categorySlug}) {
    ...CategoryDetails
  }
}
    fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}`) as unknown as TypedDocumentString<
  GetCategoryNameBySlugQuery,
  GetCategoryNameBySlugQueryVariables
>;
export const GetProductBySlugDocument = new TypedDocumentString(`
    query GetProductBySlug($slug: String!) {
  product(stage: PUBLISHED, where: {slug: $slug}, locales: pl) {
    ...ProductDetails
  }
}
    fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}
fragment ProductDetails on Product {
  id
  name
  slug
  description {
    html
  }
  category {
    ...CategoryDetails
  }
  price
  currency
  gallery {
    ...ImageDetails
  }
  quantityAvailable
  seoTitle
  seoDescription
  updatedAt
  createdAt
}`) as unknown as TypedDocumentString<
  GetProductBySlugQuery,
  GetProductBySlugQueryVariables
>;
export const GetProductsByCategorySlugDocument = new TypedDocumentString(`
    query GetProductsByCategorySlug($categorySlug: String!, $limit: Int!, $skip: Int!, $order: ProductOrderByInput = price_DESC) {
  products(
    stage: PUBLISHED
    locales: pl
    where: {category: {Category: {slug: $categorySlug}}}
    first: $limit
    skip: $skip
    orderBy: $order
  ) {
    ...ProductSummary
  }
  productsConnection(
    stage: PUBLISHED
    where: {category: {Category: {slug: $categorySlug}}}
  ) {
    aggregate {
      count
    }
  }
}
    fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}
fragment ProductSummary on Product {
  id
  name
  slug
  price
  currency
  gallery(first: 1) {
    ...ImageDetails
  }
  quantityAvailable
  category {
    ...CategoryDetails
  }
  updatedAt
  createdAt
}`) as unknown as TypedDocumentString<
  GetProductsByCategorySlugQuery,
  GetProductsByCategorySlugQueryVariables
>;
export const GetProductsByIdsDocument = new TypedDocumentString(`
    query GetProductsByIds($ids: [ID]!) {
  products(where: {id_in: $ids}, first: 100, skip: 0) {
    ...ProductSummary
  }
}
    fragment CategoryDetails on Category {
  id
  name
  slug
  description
  thumbnail {
    ...ImageDetails
  }
}
fragment ImageDetails on Asset {
  id
  mimeType
  url(transformation: {document: {output: {format: webp}}})
  width
  height
  fileName
}
fragment ProductSummary on Product {
  id
  name
  slug
  price
  currency
  gallery(first: 1) {
    ...ImageDetails
  }
  quantityAvailable
  category {
    ...CategoryDetails
  }
  updatedAt
  createdAt
}`) as unknown as TypedDocumentString<
  GetProductsByIdsQuery,
  GetProductsByIdsQueryVariables
>;
