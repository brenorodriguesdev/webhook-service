export interface CreateKeyUseCase {
    create: (tenantId: string) => Promise<void>
}