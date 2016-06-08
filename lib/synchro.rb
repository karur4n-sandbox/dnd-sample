module Synchro
  class Synchro
    def self.run
      csvs = Dir::entries('csv').sort.reverse
      new_csv = csvs[0]
      master_csv = csvs[1]

      p new_csv
      p master_csv
    end
  end
end
