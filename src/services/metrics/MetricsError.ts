export class MetricsError extends Error {
  constructor(
    public readonly code: string,
    message: string
  ) {
    super(message);
    this.name = 'MetricsError';
  }

  static fromError(error: unknown): MetricsError {
    if (error instanceof Error) {
      if (error.message.includes('time range cannot be beyond 37 months')) {
        return new MetricsError(
          'DATE_RANGE_ERROR',
          'O período selecionado excede o limite de 37 meses permitido pelo Meta'
        );
      }
      
      if (error.message.includes('access token')) {
        return new MetricsError(
          'AUTH_ERROR',
          'Erro de autenticação com a API do Meta'
        );
      }
    }

    return new MetricsError(
      'UNKNOWN_ERROR',
      'Ocorreu um erro inesperado ao buscar os dados'
    );
  }
}