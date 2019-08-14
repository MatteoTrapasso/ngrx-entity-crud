/**
 * Crud store schematics
 */
declare interface CrudSection {
    /**
     * The path at which to create the component file, relative to the current workspace. Default is a folder with the same name as the component in the project root.
     */
    path?: string; // path
    /**
     * The name of the entity.
     */
    clazz: string;
    /**
     * The name of the project.
     */
    project?: string;
}
